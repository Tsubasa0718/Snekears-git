module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    },
    'postcss-combine-media-query': {},
    'postcss-sort-media-queries': {},
  },
};
