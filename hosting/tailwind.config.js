module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.tsx'],
  },
  theme: {
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
    extend: {
      colors: {
        whitesmoke: 'whitesmoke',
        primary: '#7fffd4',
      },
    },
  },
}
