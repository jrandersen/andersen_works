const nextra = require('nextra');

module.exports = nextra('./components/layout.js')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  experimental: {
    turboMode: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  headers() {
    return [
      {
        source: '/atom/:nested*',
        headers: [
          {
            key: 'content-type',
            value: 'text/xml',
          },
        ],
      },
    ];
  },
});
