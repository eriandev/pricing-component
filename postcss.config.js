const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')({
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
  }],
})

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ]
}
