---
title: fast-refresh
order: 9
---

该插件是对 react-refresh 的集成，一个类似 hot reloading（热更新）的功能，但提供了更为强大的快热更新机制，让你对 React 组件中的更改获得近乎即时（1 ~ 2 秒）的反馈，并且当修改 React 组件发生热更新时不会丢失原有的状态。

## Install

```bash
$ npm i -save-dev build-plugin-fast-refresh
```

## Usage

```json
{
  "plugins": ["build-plugin-fast-refresh"]
}
```

TODO: 文档移除已内置，增加 `fastRefresh: false` 说明
