/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			  "2xl": "1400px",
			},
		  },	  
		extend: {colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			eco: {
			  primary: "#4A6741",
			  secondary: "#E5DED1",
			  accent: "#E8927C",
			  text: "#2C3333",
			  light: "#F7F7F7",
			},
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
		  keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
			float: {
			  "0%, 100%": { transform: "translateY(0)" },
			  "50%": { transform: "translateY(-10px)" },
			},
			"fade-up": {
			  "0%": { opacity: "0", transform: "translateY(20px)" },
			  "100%": { opacity: "1", transform: "translateY(0)" },
			},
			"fade-in": {
			  "0%": { opacity: "0" },
			  "100%": { opacity: "1" },
			},
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			float: "float 3s ease-in-out infinite",
			"fade-up": "fade-up 0.5s ease-out",
			"fade-in": "fade-in 0.5s ease-out",
		  },
		},
	  },
	plugins: [require("tailwindcss-animate")],
}