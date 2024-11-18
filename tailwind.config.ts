import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#d1d5db", // Light gray border
        input: "#f3f4f6", // Light input background
        ring: "#d1d5db", // Ring color to match the border
        background: "#121212", // Dark background for dark mode
        foreground: "#3f3f3f", // Light foreground text
        primary: {
          DEFAULT: "#333333", // Light black for primary elements
          foreground: "#333333", // Light black for primary text
        },
        secondary: {
          DEFAULT: "#d1d5db", // Light gray as secondary
          foreground: "#1f1f1f", // Dark text on secondary
        },
        destructive: {
          DEFAULT: "#f87171", // Red color for destructive actions
          foreground: "#ffffff", // White text on destructive elements
        },
        muted: {
          DEFAULT: "#6b7280", // Muted gray text
          foreground: "#3f3f3f", // Light foreground on muted elements
        },
        accent: {
          DEFAULT: "#4ade80", // Green accent
          foreground: "#ffffff", // White text on accent elements
        },
        popover: {
          DEFAULT: "#1f1f1f", // Dark popover background
          foreground: "#3f3f3f", // Light text on popover
        },
        card: {
          DEFAULT: "#1f1f1f", // Dark background for cards
          foreground: "#3f3f3f", // Light text on cards
        },
        Button: {
          DEFAULT: "#ffffff", // White button text
        },
      },
      borderRadius: {
        lg: "12px", // Larger rounded corners
        md: "8px",  // Medium rounded corners
        sm: "4px",  // Small rounded corners
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
