import { Headphones, Wrench, ShieldAlert, Clock, PhoneCall, CheckCircle } from "lucide-react";
import ServicePageTemplate from "../components/ServicePageTemplate";
import { pageSeo } from "../seo/pageSeo";

export default function TechSupport() {
  return (
    <ServicePageTemplate
      seo={pageSeo.techSupport}
      serviceName="Tech Support"
      icon={Headphones}
      h1Title="24/7 Tech Support Services | On-Demand Remote & On-Site Helpdesk"
      h1Subtitle="Rapid technical troubleshooting, operating system error fixes, software installations, malware removal, and SLA-backed corporate helpdesk support."
      overviewText="When computers freeze, emails fail to sync, or critical software crashes, every minute of delay impacts employee performance and client deliverables. S'K ONE Tech Support delivers immediate, on-demand technical assistance for businesses and enterprises. With certified support engineers accessible via direct phone, WhatsApp dispatch, or our encrypted ticket portal, we guarantee rapid triage and root-cause resolution."
      featuresTitle="On-Demand Tech Support Deliverables"
      features={[
        {
          title: "Instant Remote Technical Assistance",
          desc: "Secure encrypted remote screen-share sessions to diagnose software conflicts, configuration errors, and slow computer performance in minutes."
        },
        {
          title: "Emergency On-Site Engineer Dispatch",
          desc: "Fast field deployment across Delhi NCR, Gurugram, Jaipur, and Noida for physical workstation breakdowns, cabling failures, and hardware swaps."
        },
        {
          title: "Business Email & Account Recovery",
          desc: "Resolving Outlook connectivity drops, Microsoft 365 / Google Workspace syncing issues, password resets, and 2-factor authentication locks."
        },
        {
          title: "Software Installation & Patch Updates",
          desc: "Clean deployments of business applications, accounting packages, design software, printer utilities, and scheduled operating system rollouts."
        },
        {
          title: "Malware & Virus Disinfection",
          desc: "Deep-cleaning spyware, unwanted adware popups, Trojan infections, and restoring corrupted system files to pristine factory health."
        },
        {
          title: "Hardware Peripheral Diagnostics",
          desc: "Configuring external monitors, docking stations, webcams, barcode scanners, and VoIP desk phones for error-free workplace communication."
        }
      ]}
      specifications={[
        { label: "Dispatch SLA", value: "< 30 Minutes for Priority 1 Emergencies" },
        { label: "Availability", value: "24/7/365 Tier 1 to Tier 3 Engineers" },
        { label: "Support Channels", value: "Phone, WhatsApp, Web Portal, On-Site" },
        { label: "Operating Systems", value: "Windows 11/10, macOS, Linux, Android, iOS" }
      ]}
      processSteps={[
        {
          title: "Immediate Ticket Intake",
          desc: "Call +91-7678627526, chat on WhatsApp, or log into the portal. An engineer is assigned immediately."
        },
        {
          title: "Diagnostics & Screen Share",
          desc: "Connecting via secure one-time session key to inspect system errors, logs, and device drivers."
        },
        {
          title: "Resolution & Testing",
          desc: "Applying the corrective patch or hardware fix and verifying functionality directly with the user."
        },
        {
          title: "Ticket Sign-Off & Review",
          desc: "Sending a complete incident summary and closing the ticket with user confirmation."
        }
      ]}
      faqs={[
        {
          q: "How quickly can an engineer help when our system is down?",
          a: "For remote technical assistance, our engineers connect within 10 to 15 minutes. For on-site hardware emergencies across Delhi NCR, Gurugram, Noida, and Jaipur, dispatches arrive in under 1 to 2 hours."
        },
        {
          q: "Is remote support safe and secure for our company data?",
          a: "Absolutely. We use 256-bit AES end-to-end encrypted remote support sessions that require user authorization for every connection. You maintain full visibility and can terminate the session at any moment."
        },
        {
          q: "Can we get support for both Windows PCs and Apple MacBooks?",
          a: "Yes. Our team provides equal expert technical support across Windows 11/10, Apple macOS, Linux distributions, and mobile platforms."
        },
        {
          q: "What are your business support hours?",
          a: "Our helpdesk operates 24/7/365 with on-call escalation engineers dedicated to handling off-hours emergencies, weekend maintenance, and shift coverage."
        }
      ]}
      relatedServices={[
        {
          title: "IT Support Services",
          path: "/it-support",
          desc: "Structured business IT support and infrastructure management."
        },
        {
          title: "Computer Repair",
          path: "/computer-repair",
          desc: "Hardware upgrades, motherboard repairs, and NVMe SSD installation."
        },
        {
          title: "Managed IT Services",
          path: "/managed-it-services",
          desc: "Proactive 24/7 monitoring, automated patching, and disaster recovery."
        },
        {
          title: "Network Support",
          path: "/network-support",
          desc: "Wi-Fi troubleshooting, Cisco switches, and router configurations."
        }
      ]}
    />
  );
}
