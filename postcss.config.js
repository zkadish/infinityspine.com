module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 10 version',
    },
    cssnano: {},
  },
};
