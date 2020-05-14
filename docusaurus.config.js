module.exports = {
  title: 'solarhell的小破站',
  tagline: '简单胜过复杂',
  url: 'https://blog.solarhell.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'solarhell', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    gtag: {
      trackingID: 'UA-78450319-1',
      // Optional fields.
      anonymizeIP: false, // Should IPs be anonymized?
    },
    algolia: {
      apiKey: 'a3bf15c6f157bdbdb0b3b2a00fec99f0',
      indexName: 'solarhell',
    },
    navbar: {
      title: 'solarhell的小破站',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'tags', label: 'Tags', position: 'left'},
        {
          href: 'https://github.com/solarhell',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '关于我...',
          items: [
            {
              label: '就职于@shein',
            },
            {
              label: '坐标@江苏南京',
            },
          ],
        },
        {
          title: '你可以在这里找到我...',
          items: [
            {
              label: 'Telegram',
              href: 'https://telegram.me/solarhell',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/solarhell',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/6080485/solarhell',
            },
          ],
        },
        {
          title: '我的朋友们...',
          items: [
            {
              label: '歪比巴卜',
              href: 'https://niconiconi.org/',
            },
            {
              label: 'YasinChan',
              href: 'https://yasinchan.com/',
            },
          ],
        },
      ],
      copyright: `<a href="http://www.beian.miit.gov.cn" rel="nofollow">苏ICP备15030398号-1</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          routeBasePath: '/', // Set this value to '/'.
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/solarhell/blog/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
