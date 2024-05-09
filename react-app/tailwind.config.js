/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      'sm': '2rem',
      'md': '3rem',
      'h-sm': '20rem',
      'h-rm': '30rem',
    },
    fontSize: {
      "xsm": '1.2rem',
       "sm": '1.6rem',
      "md": '2.4rem',
      "lg": '3rem',
      'xl': '4rem',
    },
    extend: {
      colors: {
        "light-color": "var(--light-color)",
        "pagination-color": "var(--pagination-color)",
        "light-color-alt": "var(--light-color-alt)",
        "primary-background-color": "var(--primary-background-color)",
        "secondary-background-color": "var(--secondary-background-color)",
        "hover-light-color": "var(--hover-light-color)",
        "hover-dark-color": "var(--hover-dark-color)",
        "transparent-light-color": "rgb(var(--transparent-light-color) / <0.05>)",
        "transparent-dark-color": "#000000bf",
        "gradient-color":
          "linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b)",
      },
      boxShadow: {
        'header': '0 1px 0.5rem rgba(255,255,255,.05)',
        'menu': '1px 1px 1rem rgba(255,255,255,.05)',
      },
      animation: {
        'menuToggleOpen': 'menuToggleOpen 1s linear',
        'menuToggleClose': 'menuToggleClose 1s linear',
      },
      gridTemplateColumns: {
        'features': '70% auto',
      },
      gridTemplateRows: {
        'features': '50px 1fr 1fr',
      }
    },
  },
  plugins: [],
};

