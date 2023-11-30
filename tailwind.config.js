/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('./assets/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('./assets/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('./assets/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('./assets/images/bg-mobile-dark.jpg')",
      }
    },
    colors: {
      veryLightGray: 'hsl(var(--very-light-gray) / <alpha-value>)',
      veryLightGrayishBlue: 'hsl(var(--very-light-grayish-blue) / <alpha-value>)',
      lightGrayishBlue: 'hsl(var(--light-grayish-blue) / <alpha-value>)',
      darkGrayishBlue: 'hsl(var(--light-grayish-blue) / <alpha-value>)',
      veryDarkGrayishBlue: 'hsl(var(--very-dark-grayish-blue) / <alpha-value>)',

      dtVeryDarkBlue: 'hsl(var(--dt-very-dark-blue) / <alpha-value>)',
      dtVeryDarkDesaturatedBlue: 'hsl(var(--dt-very-dark-desaturated-blue) / <alpha-value>)',
      dtLightGrayishBlue: 'hsl(var(--dt-light-grayish-blue) / <alpha-value>)',
      dtLightGrayishBlueHover: 'hsl(var(--dt-light-grayish-blue-hover) / <alpha-value>)',
      dtDarkGrayishBlue: 'hsl(var(--dt-dark-grayish-blue) / <alpha-value>)',
      dtVeryDarkGrayishBlue: 'hsl(var(--dt-very-dark-grayish-blue) / <alpha-value>)',
      dtVeryDarkGrayishBlue2: 'hsl(var(--dt-very-dark-grayish-blue2) / <alpha-value>)',
    }
  },
  plugins: [],
}

