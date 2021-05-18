import * as chokidar from 'chokidar';
import { chalk, logger, path } from '@vuepress/utils';
import { defineUserConfig } from '@vuepress/cli';
import type { DefaultThemeOptions } from '@vuepress/theme-default';

import { navbar, sidebar } from './configs';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/site/',
  head: [['link', { rel: 'icon', href: '/site/favicon.png' }]],
  locales: {
    '/': {
      lang: 'zh-CN',
      // title: '飞冰',
      description: 'Vue-powered Static Site Generator',
    },
    // 显示多语言
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'ICE',
    //   description: '中后台框架',
    // },
  },

  themeConfig: {
    logo: 'https://img.alicdn.com/tfs/TB1AI2vteOSBuNjy0FdXXbDnVXa-680-192.png',
    repo: 'alibaba/ice',
    docsDir: 'docs/',
    docsBranch: 'master',
    docsRepo: 'ice-lab/site',

    // theme-level locales config
    locales: {
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
        sidebar: sidebar.zh,
        editLinkText: '编辑此文档',
        contributorsText: '贡献者',
        lastUpdatedText: '最后更新时间',
      },

      // 多语言配置
      // '/en/': {
      //   // navbar
      //   navbar: navbar.en,
      //   selectLanguageName: 'English',
      //   selectLanguageText: '选择语言',
      //   selectLanguageAriaLabel: '选择语言',

      //   // // sidebar
      //   // sidebar: sidebar.zh,

      //   // // page meta
      //   // editLinkText: '在 GitHub 上编辑此页',
      //   // lastUpdatedText: '上次更新',
      //   // contributorsText: '贡献者',

      //   // // custom containers
      //   // tip: '提示',
      //   // warning: '注意',
      //   // danger: '警告',

      //   // // 404 page
      //   // notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
      //   // backToHome: '返回首页',

      //   // // other
      //   // openInNewWindow: '在新窗口打开',
      // },
    },
  },

  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
            maxSuggestions: 10,
          },
        },
      },
    ],
  ],

  onWatched: (_, watchers, restart) => {
    const watcher = chokidar.watch('configs/**/*.ts', {
      cwd: __dirname,
      ignoreInitial: true,
    });
    watcher.on('change', async (file) => {
      logger.info(`file ${chalk.magenta(file)} is modified`);
      await restart();
    });
    watchers.push(watcher);
  },
});
