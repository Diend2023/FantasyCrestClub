/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // title: 'AIR SDK',
  title: '幻想纹章Club',
  tagline:
    // 'Develop beautiful cross-platform applications from a single code base using the AIR SDK and ActionScript',
    '在这里，你可以找到关于幻想纹章系列游戏的各种资料和资源，在线游戏，或者加入社区交流',
  // url: 'https://airsdk.dev',
    url: 'https://hxwz.wanqifan.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  // organizationName: 'airsdk', // Usually your GitHub org/user name.
  organizationName: '幻想纹章3交流群',
  projectName: 'FantasyCrestClub', // Usually your repo name.
  trailingSlash: false,
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Noto+Sans+JP&family=Open+Sans&family=Roboto&family=Lato&display=swap',
      type: 'text/css',
    },
  ],
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'This site is under construction. We need your <a target="_blank" rel="noopener noreferrer" href="https://github.com/airsdk/airsdk.dev/blob/main/CONTRIBUTING.md">contributions</a> to fill out the documentation.',
    //   backgroundColor: '#8BE8CB', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },

    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['actionscript', 'csharp'],
      // defaultLanguage: 'actionscript',
    },

    navbar: {
      // title: 'AIR SDK',
      title: '幻想纹章Club',
      logo: {
        // alt: 'AIR SDK',
        alt: '幻想纹章Club',
        src: 'images/logo.svg',
      },
      items: [
        // { to: '/features', label: 'Features', position: 'left' },
        // { to: '/docs', label: 'Docs', position: 'left' },
        { to: '/docs', label: '文档', position: 'left' },
        // { type: 'dropdown', label: 'Reference', position: 'left', items: [
        //   { to: '/reference/latest', label: 'Latest' },
        //   { to: '/reference/33.1.1', label: '33.1.1' },
        // ]},
        // { to: '/reference', label: 'Reference', position: 'left' },
        { to: '/reference', label: 'ActionScript 3.0', position: 'left' },
        // { to: '/showcase', label: 'Showcase', position: 'left' },
        { to: '/showcase', label: '游戏', position: 'left' },
        // { to: '/community', label: 'Community', position: 'left' },
        { to: '/community', label: '社区', position: 'left' },
        // { to: '/news', label: 'News', position: 'left' },
        { to: '/news', label: '新闻', position: 'left' },
        {
          // href: 'https://github.com/airsdk/airsdk.dev',
          href: 'https://github.com/Diend2023/FantasyCrestClub',
          'aria-label': 'GitHub repository',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    footer: {
      logo: {
        // alt: 'AIR',
        alt: '幻想纹章Club',
        src: 'images/logo.svg',
        href: '/',
      },
      links: [
        {
          // title: 'Docs',
          title: '文档',
          items: [
            {
              label: 'Features',
              to: '/docs/features',
              className: 'footer__link-item',
            },
            {
              label: 'Getting Started',
              to: '/docs/basics/getting-started',
              className: 'footer__link-item',
            },
            {
              label: 'Tutorials',
              to: '/docs/tutorials',
            },
            {
              label: 'Reference',
              to: '/reference',
            },
          ],
        },
        {
          // title: 'Community',
          title: '社区',
          items: [
            { to: '/community', label: 'Community' },
            { to: '/showcase', label: 'Showcase' },
            {
              label: 'Discussions',
              href: 'https://github.com/airsdk/Adobe-Runtime-Support/discussions',
            },
            {
              label: 'Starling Forum',
              href: 'https://forum.starling-framework.org/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/actionscript-3',
            },
          ],
        },
        {
          // title: 'More',
          title: '更多',
          items: [
            {
              label: 'News',
              to: '/news',
            },
            {
              label: 'GitHub',
              // href: 'https://github.com/airsdk/airsdk.dev',
              href: 'https://github.com/Diend2023/FantasyCrestClub',
            },
          ],
        },
      ],
      // copyright: `Except as otherwise noted, this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">Creative Commons Attribution 3.0</a> License, and code samples are licensed under the MIT License. <br/>Adobe, the Adobe logo, Adobe AIR, ActionScript, AIR, Flash, Flash Builder, Flash Lite, Flex, MXML, and Pixel Bender are either registered trademarks or trademarks of Adobe Systems Incorporated in the United States and/or other countries.<br/>Much of this content is based on the original <a href="https://help.adobe.com/en_US/air/build/index.html">Adobe developer documentation</a>`,
      copyright: `该项目来源于<a href="https://github.com/airsdk/airsdk.dev/">airsdk.dev</a>，仅保留了<a href="https://airsdk.dev/reference/">Reference</a>部分<br/>其它关于幻想纹章的内容均为原作者左眼 （<a href="https://github.com/rainyt">Rainy</a>、<a href="https://gitee.com/zygameui">左眼</a>）所有`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'reference',
          routeBasePath: 'reference',
        //   sidebarPath: require.resolve('./reference-sidebars.js'),
        },
        blog: {
          blogDescription: 'AIR SDK News',
          showReadingTime: true,
          blogSidebarTitle: "Latest News",
          blogSidebarCount: 12,
          routeBasePath: 'news',
          path: './news',
          feedOptions: {
            type: 'all',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PBLKC63BP2',
          anonymizeIP: false,
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/airsdk/airsdk.dev/edit/main/',
      },
    ],
  ],
};
