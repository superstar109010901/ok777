/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./store/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    // Explicit border radius values
    'rounded-[4px]',
    'rounded-[6px]',
    'rounded-[8px]',
    'rounded-[9.15px]',
    'rounded-[12px]',
    'rounded-[12.6px]',
    'rounded-[14px]',
    'rounded-[16px]',
    'rounded-[12px_0_12px_0]',
    // Duration values
    'duration-[34ms]',
    'duration-[250ms]',
    'duration-[600ms]',
    // Ease values
    'ease-[cubic-bezier(0.3,0.7,0.4,1)]',
    'ease-[cubic-bezier(0.3,0.7,0.4,1.5)]',
    // Group hover duration values
    'group-hover:duration-[250ms]',
    'group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)]',
    // Group active duration values
    'group-active:duration-[34ms]',
    // Common responsive utilities
    'sm:hidden', 'sm:block', 'sm:flex', 'sm:grid',
    'md:hidden', 'md:block', 'md:flex', 'md:grid',
    'lg:hidden', 'lg:block', 'lg:flex', 'lg:grid',
    'xl:hidden', 'xl:block', 'xl:flex', 'xl:grid',
    'sm:text-xs', 'sm:text-sm', 'sm:text-base', 'sm:text-lg',
    'md:text-xs', 'md:text-sm', 'md:text-base', 'md:text-lg',
    'lg:text-xs', 'lg:text-sm', 'lg:text-base', 'lg:text-lg',
    'xl:text-xs', 'xl:text-sm', 'xl:text-base', 'xl:text-lg',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Bull Player App Colors
        'dodger-blue': '#2283F6',
        'casper': '#A7B5CA',
        'mirage': '#111923',
        'yellow-orange': '#FFB636',
        'crimson': '#ED1D49',
        'malachite': '#1BB83D',
        'white-4': 'rgba(255, 255, 255, 0.04)',
        'white-8': 'rgba(255, 255, 255, 0.08)',
        'white-13': 'rgba(255, 255, 255, 0.13)',
        'white-16': 'rgba(255, 255, 255, 0.16)',
        'white-21': 'rgba(255, 255, 255, 0.21)',
        'white-14': 'rgba(255, 255, 255, 0.14)',
        // Additional colors used in TabButton
        'mirage-4': 'rgba(17, 25, 35, 0.04)',
        '2A3546': '#2A3546',
        'FFFFFF21': 'rgba(255, 255, 255, 0.21)',
        'FFFFFF14': 'rgba(255, 255, 255, 0.14)',
        '2283f6': '#2283f6',
        'ffffff': '#ffffff',
        // Additional colors found in the project
        'mirage-2': 'rgba(17, 25, 35, 0.2)',
        'FFFFFF0A': 'rgba(255, 255, 255, 0.04)',
        'FFFFFF38': 'rgba(255, 255, 255, 0.22)',
        'FFFFFF1A': 'rgba(255, 255, 255, 0.10)',
        'FFFFFF54': 'rgba(255, 255, 255, 0.33)',
        '1119238A': 'rgba(17, 25, 35, 0.54)',
        '2283F680': 'rgba(34, 131, 246, 0.50)',
        '003a8a': '#003a8a',
        '0C60FF': '#0C60FF',
        '2C9FFA': '#2C9FFA',
        '1a2332': '#1a2332',
        '1BB83D': '#1BB83D',
        '2283F6': '#2283F6',
        'ffb636': '#ffb636',
        '919191': '#919191',
        'ED1D49': '#ED1D49',
        'ED1D4900': 'rgba(237, 29, 73, 0)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  // Enable arbitrary values for all properties
  experimental: {
    arbitraryValues: true,
  },
};

