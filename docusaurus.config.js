/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // title: 'AIR SDK',
  title: '幻想纹章Club',
  tagline:
    // 'Develop beautiful cross-platform applications from a single code base using the AIR SDK and ActionScript',
    '在这里，你可以找到关于幻想纹章系列游戏的各种资料和资源，在线游戏，或者加入社区交流',
  // url: 'https://airsdk.dev',
    url: 'https://hxwz3.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  // onBrokenMarkdownLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'favicon.ico',
  // organizationName: 'airsdk', // Usually your GitHub org/user name.
  organizationName: '幻想纹章3交流群',
  projectName: 'FantasyCrestClub', // Usually your repo name.
  trailingSlash: true,
  stylesheets: [
    {
      // href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Noto+Sans+JP&family=Open+Sans&family=Roboto&family=Lato&display=swap',
      href: '/css2.css',
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
        { href: 'https://airsdk.dev/reference', label: 'ActionScript 3.0', position: 'left' },
        { href: 'https://zygameui.cn/?p=haxe', label: 'Haxe', position: 'left' },
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
      // logo: {
      //   // alt: 'AIR',
      //   alt: '幻想纹章Club',
      //   src: 'images/logo.svg',
      //   href: '/',
      // },
      links: [
        {
          // title: 'Docs',
          title: '文档',
          items: [
            // {
            //   label: 'Features',
            //   to: '/docs/features',
            //   className: 'footer__link-item',
            // },
            // {
            //   label: 'Getting Started',
            //   to: '/docs/basics/getting-started',
            //   className: 'footer__link-item',
            // },
            // {
            //   label: 'Tutorials',
            //   to: '/docs/tutorials',
            // },
            {
              label: '文档首页',
              href: '/docs',
            },
            {
              label: 'Haxe',
              href: 'https://zygameui.cn/?p=haxe',
            },
            {
              label: 'ActionScript 3.0',
              // to: '/reference',
              href: 'https://airsdk.dev/reference',
            },
          ],
        },
        {
          // title: 'Community',
          title: '社区',
          items: [
            // { to: '/community', label: 'Community' },
            // { to: '/showcase', label: 'Showcase' },
            { to: '/community', label: '社区' },
            { to: '/showcase', label: '游戏' },
            // {
            //   label: 'Discussions',
            //   href: 'https://github.com/airsdk/Adobe-Runtime-Support/discussions',
            // },
            // {
            //   label: 'Starling Forum',
            //   href: 'https://forum.starling-framework.org/',
            // },
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/actionscript-3',
            // },
            {
              label: '卓越逻辑',
              href: 'https://zygameui.cn',
            },
            {
              label: '幻想纹章3交流群',
              href: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=NKKmX64I09HS90RrF-0lABHCy_Pbk-ZG&authKey=KcyDbNw%2F17UKTfofV1dm4KRyvuIz7r3KF3OfZk50SFjEYvgfk5RWAhLEHBMHEsT8&noverify=0&group_code=1055702064',
            },
            {
              label: '幻想纹章4官方号',
              href: 'https://space.bilibili.com/1120918222',
            },
          ],
        },
        {
          // title: 'More',
          title: '更多',
          items: [
            {
              // label: 'News',
              label: '新闻',
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
      copyright: `该项目来源于<a href="https://github.com/airsdk/airsdk.dev/">airsdk.dev</a><br/>其它关于幻想纹章的内容均为原作者左眼 （<a href="https://github.com/rainyt">Rainy</a>、<a href="https://gitee.com/zygameui">左眼</a>）所有<br/><img src="/images/gongan.png"><a href="https://beian.mps.gov.cn/#/query/webSearch?code=36010602000383" rel="noreferrer" target="_blank">赣公网安备36010602000383号</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2023003671号-3</a>`,
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
          // blogDescription: 'AIR SDK News',
          blogDescription: '幻想纹章新闻',
          showReadingTime: true,
          blogSidebarTitle: "近期更新",
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
        // gtag: {
        //   trackingID: 'G-PBLKC63BP2',
        //   anonymizeIP: false,
        // },
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
        // editUrl: 'https://github.com/airsdk/airsdk.dev/edit/main/',
      },
    ],
  ],
};
