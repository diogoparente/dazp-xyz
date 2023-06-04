const { fontFamily } = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

delete colors["lightBlue"]
delete colors["warmGray"]
delete colors["trueGray"]
delete colors["coolGray"]
delete colors["blueGray"]

const dark = {
  c1: "#202020",
  c2: colors.orange["400"],
  c3: colors.pink["500"],
  c4: colors.white,
}

const light = {
  c1: "#eed",
  c2: colors.purple["600"],
  c3: colors.indigo["700"],
  c4: "#202020",
}

const breakpoints = {
  sm: "400px",
  m: "767px",
  lg: "1024px",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      maxWidth: "500px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "sm-max": { max: breakpoints.sm },
        "md-max": { max: breakpoints.m },
        "lg-max": { max: breakpoints.lg },
        "md-min": { min: breakpoints.m },
      },
      colors: {
        ...colors,
        c1: "var(--colors-c1)",
        c2: "var(--colors-c2)",
        c3: "var(--colors-c3)",
        c4: "var(--colors-c4)",
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
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      variables: {
        DEFAULT: {
          colors: light,
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: dark,
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@mertasan/tailwindcss-variables"),
  ],
}
