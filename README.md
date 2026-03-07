<h1 align="center">幻想纹章Club</h1>

<div align="center">
    幻想纹章Club的源码。在这里，你可以找到关于幻想纹章系列游戏的各种资料和资源，在线游戏，或者加入社区交流。
</div>

---

<!-- ## Contributing

Read the [contributing guide](CONTRIBUTING.md) to learn about how you can contribute to the air sdk developer site. -->

## 构建

### 环境要求

- [Node.js](https://nodejs.org/en/download/) 版本 >= 12.13.0 或者更高 (使用 `node -v` 命令获取当前版本号). 或者你可以使用 [`nvm`](https://github.com/nvm-sh/nvm) 管理多版本Node.js。

### 项目结构

```
├── news
│   ├── 2021-05-25-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
├── reference
│   ├── reference1.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `news` 与幻想纹章相关的新闻，持续更新中。
- `docs` 与幻想纹章相关的文档，包含教程、技术文档、代码解析等等，待更新。
- `reference` 已弃用。
- `src` 项目使用的资源。

### 安装第三方模块

如果你准备好要开发此项目，可以在下载该项目后在项目根目录运行：

```
npm install
```

这将下载该项目所需要的第三方模块。

### 运行开发服务端

如果你需要预览修改的效果，你可以运行：

```
npm run start
```

如果编译没有问题，你可以在这个地址访问网站： `http://localhost:3000`。

## 声明

该项目源码来源于[airsdk.dev](https://github.com/airsdk/airsdk.dev)
