const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./**/*.html'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '7xl': '7rem',
      },
      colors: {
        'very-light-gray-blue': 'hsl(240, 78%, 98%)',
        'light-gray-blue': 'hsl(234, 14%, 74%)',
        'gray-blue': 'hsl(233, 13%, 49%)',
        'dark-gray-blue': 'hsl(232, 13%, 33%)',
        'nice-purple': 'hsl(236, 72%, 79%)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  variants: {},
  plugins: []
}
