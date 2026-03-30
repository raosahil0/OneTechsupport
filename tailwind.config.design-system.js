/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // ===== COLORS =====
      colors: {
        // Brand colors (Primary Blue)
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Accent colors (Cyan/Teal)
        accent: {
          cyan: '#06B6D4',
          'cyan-hover': '#0891B2',
          teal: '#14B8A6',
          glow: '#22D3EE',
        },
        // Semantic colors
        success: {
          DEFAULT: '#10B981',
          hover: '#059669',
        },
        warning: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
        },
        error: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
        },
        info: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
      },
      
      // ===== TYPOGRAPHY =====
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'display': ['72px', { 
          lineHeight: '80px', 
          letterSpacing: '-0.03em', 
          fontWeight: '700',
          fontFamily: 'var(--font-heading)'
        }],
        'h1': ['56px', { 
          lineHeight: '64px', 
          letterSpacing: '-0.02em', 
          fontWeight: '700',
          fontFamily: 'var(--font-heading)'
        }],
        'h2': ['48px', { 
          lineHeight: '56px', 
          letterSpacing: '-0.02em', 
          fontWeight: '700',
          fontFamily: 'var(--font-heading)'
        }],
        'h3': ['36px', { 
          lineHeight: '44px', 
          letterSpacing: '-0.01em', 
          fontWeight: '600',
          fontFamily: 'var(--font-heading)'
        }],
        'h4': ['30px', { 
          lineHeight: '38px', 
          letterSpacing: '-0.01em', 
          fontWeight: '600',
          fontFamily: 'var(--font-heading)'
        }],
        'h5': ['24px', { 
          lineHeight: '32px', 
          fontWeight: '600',
          fontFamily: 'var(--font-heading)'
        }],
        'h6': ['20px', { 
          lineHeight: '28px', 
          fontWeight: '600',
          fontFamily: 'var(--font-heading)'
        }],
        'body-xl': ['20px', { 
          lineHeight: '32px', 
          fontWeight: '400',
          fontFamily: 'var(--font-body)'
        }],
        'body': ['16px', { 
          lineHeight: '26px', 
          fontWeight: '400',
          fontFamily: 'var(--font-body)'
        }],
        'body-sm': ['14px', { 
          lineHeight: '22px', 
          fontWeight: '400',
          fontFamily: 'var(--font-body)'
        }],
        'caption': ['12px', { 
          lineHeight: '18px', 
          fontWeight: '500', 
          letterSpacing: '0.02em',
          fontFamily: 'var(--font-body)'
        }],
        'label': ['14px', { 
          lineHeight: '20px', 
          fontWeight: '600', 
          letterSpacing: '0.02em',
          fontFamily: 'var(--font-body)'
        }],
        'button': ['16px', { 
          lineHeight: '20px', 
          fontWeight: '600',
          fontFamily: 'var(--font-body)'
        }],
      },
      
      // ===== SPACING =====
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '28': '112px',
        '30': '120px',
      },
      
      // ===== BORDER RADIUS =====
      borderRadius: {
        'none': '0px',
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      
      // ===== SHADOWS =====
      boxShadow: {
        'none': 'none',
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'brand': '0 4px 14px rgba(59, 130, 246, 0.3)',
        'brand-hover': '0 8px 24px rgba(59, 130, 246, 0.4)',
        'accent': '0 4px 14px rgba(6, 182, 212, 0.3)',
      },
      
      // ===== ANIMATION =====
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 1.5s infinite',
        'spin': 'spin 0.8s linear infinite',
        'pulse-success': 'successPulse 0.5s ease',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(24px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideDown: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(-40px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
        successPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      
      // ===== TRANSITIONS =====
      transitionDuration: {
        'instant': '50ms',
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
        'very-slow': '700ms',
      },
      
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      
      // ===== CONTAINER =====
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          md: '32px',
          lg: '64px',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      
      // ===== BACKDROP BLUR =====
      backdropBlur: {
        xs: '2px',
      },
      
      // ===== LINE HEIGHT =====
      lineHeight: {
        '18': '72px',
        '20': '80px',
      },
    },
  },
  plugins: [],
}
