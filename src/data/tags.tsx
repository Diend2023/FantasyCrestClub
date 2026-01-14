import React from 'react';

export type TagType =
  | 'highlight'
  | 'game'
  | 'utility'
  | 'entertainment'
  | 'social'
  | 'education'
  | 'commandline'
  | 'mobile'
  | 'desktop'
  | 'tv'
  | 'flash'
  | 'ruffle'
  | 'web';

export type Tag = {
  label: string;
  description: string;
  icon: JSX.Element;
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to highlight
  highlight: {
    label: 'Highlight',
    description: '令人惊叹的应用程序，您应该查看！',
    icon: (
      <>
        <img src="/images/tags/highlight.png" alt="highlight" />
      </>
    ),
  },

  game: {
    label: 'Game',
    description: '游戏应用程序',
    icon: (
      <>
        <img src="/images/tags/game.png" alt="game" />
      </>
    ),
  },

  utility: {
    label: 'Utility',
    description: '实用程序应用程序，像天气应用程序这样的便捷工具',
    icon: (
      <>
        <img src="/images/tags/utility.png" alt="utility" />
      </>
    ),
  },

  entertainment: {
    label: 'Entertainment',
    description: '用于娱乐的媒体、音乐或视频的应用程序',
    icon: (
      <>
        <img src="/images/tags/entertainment.png" alt="entertainment" />
      </>
    ),
  },

  social: {
    label: 'Social',
    description: '社交应用程序，用户用来与其他人交流',
    icon: (
      <>
        <img src="/images/tags/social.png" alt="social" />
      </>
    ),
  },

  education: {
    label: 'Education',
    description: '用于学习和教育目的的应用程序',
    icon: (
      <>
        <img src="/images/tags/education.png" alt="education" />
      </>
    ),
  },

  commandline: {
    label: 'Command Line',
    description: '在命令行或终端中使用的应用程序',
    icon: (
      <>
        <img src="/images/tags/commandline.png" alt="commandline" />
      </>
    ),
  },

  mobile: {
    label: 'Mobile',
    description: '针对移动平台（如iOS或Android）的应用程序',
    icon: (
      <>
        <img src="/images/tags/mobile.png" alt="mobile" />
      </>
    ),
  },

  desktop: {
    label: 'Desktop',
    description: '针对桌面平台（如Windows或macOS）的应用程序',
    icon: (
      <>
        <img src="/images/tags/desktop.png" alt="desktop" />
      </>
    ),
  },

  tv: {
    label: 'TV',
    description:'针对电视平台（如AppleTV或AndroidTV）的应用程序',
    icon: (
      <>
        <img src="/images/tags/tv.png" alt="tv" />
      </>
    ),
  },
  flash: {
    label: 'Flash',
    description: '必须在可用flash插件的浏览器或者flash player中运行的Flash应用程序',
    icon: (
      <>
        <img src="/images/tags/flash.png" alt="flash" />
      </>
    ),
  },
  ruffle: {
    label: 'Ruffle',
    description: '可以使用Ruffle在浏览器中直接运行的Flash应用程序',
    icon: (
      <>
        <img src="/images/tags/ruffle.png" alt="ruffle" />
      </>
    ),
  },
  web: {
    label: 'Web',
    description: '可以在浏览器中直接运行的Web应用程序',
    icon: (
      <>
        <img src="/images/tags/web.png" alt="web" />
      </>
    ),
  },
};

export const TagList = Object.keys(Tags) as TagType[];
