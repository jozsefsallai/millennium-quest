const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp', 'en'],
    localeDetection: false,
  },

  localePath: path.join(__dirname, 'public/i18n'),
};
