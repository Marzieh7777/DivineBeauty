/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px"
    },
    extend: {
      colors: {
        primary: '',
        secondry: '#E4C97A',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
      },
      backgroundImage: {

      }

    },
    fontFamily: {
      Baloo: ["BalooBhaijaan2", "sans-serif"],
      Zain: ["Zain", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      }
    },

  },
  plugins: [],
}

