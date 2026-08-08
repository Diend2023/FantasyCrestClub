/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // 手动定义侧边栏：文件夹为英文，标签为中文
  mainSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '文档首页',
    },
    {
      type: 'category',
      label: '教程',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '幻想纹章4',
          items: [
            {
              type: 'doc',
              id: 'tutorial/hxwz4/play-with-local-browser',
              label: '使用本地浏览器玩纹4本地版',
            },
          ],
        },
      ],
    },
  ],
};
