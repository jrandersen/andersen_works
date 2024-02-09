const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})


module.exports = nextra('./components/layout.js')({
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
