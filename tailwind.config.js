
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#111111',
        'surface': '#222222',
        'primary': '#E5007E', // Magenta/Pink
        'secondary': '#6D28D9', // Purple
        'text-primary': '#FFFFFF',
        'text-secondary': '#CCCCCC',
        'muted': '#222222',
        'muted-foreground': '#CCCCCC',
        'pink-300': '#f9a8d4',
        'purple-300': '#c4b5fd',
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #E5007E, #6D28D9)',
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
