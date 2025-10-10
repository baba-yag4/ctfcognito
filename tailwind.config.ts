import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        orbitron: ["var(--font-orbitron)"],
        code: ["var(--font-code)"],
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
        matrix: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 100%": { 
            transform: "translate(0)",
            filter: "hue-rotate(0deg)",
          },
          "10%": { transform: "translate(-2px, 2px)" },
          "20%": { transform: "translate(-4px, -2px)" },
          "30%": { transform: "translate(4px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "50%": { 
            transform: "translate(2px, 2px)", 
            filter: "hue-rotate(90deg)",
          },
          "60%": { transform: "translate(-4px, 2px)" },
          "70%": { transform: "translate(4px, -2px)" },
          "80%": { transform: "translate(-2px, 2px)" },
          "90%": { 
            transform: "translate(2px, -2px)", 
            filter: "hue-rotate(180deg)",
          },
        },
        float: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": { 
            transform: "translateY(-20px) rotate(180deg)",
          },
        },
        "pulse-glow": {
          "0%": { 
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
          },
          "100%": { 
            boxShadow: "0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(6, 182, 212, 0.3)",
          },
        },
        circuit: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        holographic: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        matrix: "matrix 20s linear infinite",
        glitch: "glitch 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        circuit: "circuit 8s linear infinite",
        holographic: "holographic 4s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
