/**
 * Rate Limiter & Anti-Spam Protection Utility
 * Prevents automated bot spam, rapid repeat submissions, and brute-force attempts.
 */

const STORAGE_PREFIX = "rate_limit_";

/**
 * Checks whether an action is allowed based on client-side rate limits.
 * 
 * @param {string} actionKey - Unique key for the action (e.g. 'contact_form', 'feedback_form')
 * @param {Object} options
 * @param {number} options.minIntervalMs - Minimum delay between submissions (default: 15,000ms / 15s)
 * @param {number} options.maxPerWindow - Maximum submissions allowed in the window (default: 5)
 * @param {number} options.windowMs - Time window for maxPerWindow (default: 300,000ms / 5 min)
 * @returns {{ allowed: boolean, message?: string, retryAfterSeconds?: number }}
 */
export const checkRateLimit = (actionKey, {
  minIntervalMs = 15000,
  maxPerWindow = 5,
  windowMs = 5 * 60 * 1000,
} = {}) => {
  try {
    const key = STORAGE_PREFIX + actionKey;
    const now = Date.now();
    const rawData = sessionStorage.getItem(key);
    let timestamps = rawData ? JSON.parse(rawData) : [];

    // Filter out timestamps outside the active window
    timestamps = timestamps.filter((t) => now - t < windowMs);

    // 1. Check interval since the last submission
    if (timestamps.length > 0) {
      const lastAttempt = timestamps[timestamps.length - 1];
      const elapsed = now - lastAttempt;
      if (elapsed < minIntervalMs) {
        const waitSec = Math.ceil((minIntervalMs - elapsed) / 1000);
        return {
          allowed: false,
          retryAfterSeconds: waitSec,
          message: `Please wait ${waitSec} second${waitSec > 1 ? "s" : ""} before submitting again.`,
        };
      }
    }

    // 2. Check maximum submissions within the rolling window
    if (timestamps.length >= maxPerWindow) {
      const oldestInWindow = timestamps[0];
      const waitSec = Math.ceil((windowMs - (now - oldestInWindow)) / 1000);
      return {
        allowed: false,
        retryAfterSeconds: waitSec,
        message: `Too many submissions. Please wait ${Math.ceil(waitSec / 60)} minute(s) before trying again.`,
      };
    }

    return { allowed: true };
  } catch (err) {
    // If storage is disabled, allow submission
    return { allowed: true };
  }
};

/**
 * Records a successful submission attempt to enforce rate limiting.
 * @param {string} actionKey
 */
export const recordAttempt = (actionKey) => {
  try {
    const key = STORAGE_PREFIX + actionKey;
    const now = Date.now();
    const rawData = sessionStorage.getItem(key);
    const timestamps = rawData ? JSON.parse(rawData) : [];
    timestamps.push(now);
    sessionStorage.setItem(key, JSON.stringify(timestamps.slice(-10)));
  } catch (e) {
    // Ignore storage errors
  }
};

/**
 * Honeypot bot detector.
 * Bots typically fill out all fields in a form, including hidden ones.
 * Real users never see or fill out the honeypot.
 * 
 * @param {string} honeypotValue - Value of the hidden honeypot input
 * @returns {boolean} true if bot detected, false if human
 */
export const isBotSubmission = (honeypotValue) => {
  return Boolean(honeypotValue && honeypotValue.trim().length > 0);
};
