import rehypeHighlight from 'rehype-highlight';

const nextra = require('nextra');

module.exports = nextra('./components/layout.js')({
  experimental: {
    turboMode: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  options: {
    // remarkGfm adds support for markdown tables
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
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
