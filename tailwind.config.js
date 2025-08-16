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
          animation: {
            marquee: 'marquee var(--duration) linear infinite',
          },
          keyframes: {
            marquee: {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(calc(-100% - var(--gap)))' }
            }
          }
        },
      },
      plugins: [],
    }
