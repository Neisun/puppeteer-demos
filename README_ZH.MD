# Puppeteer是什么？

> Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。Puppeteer 默认以 headless 模式运行，但是可以通过修改配置文件运行“有头”模式。 简单来说，就是把我们在自己个人计算机上安装的Chrome浏览器，变成一个工具包，可以运行在任何系统上。 所以，浏览器可以做的，`Puppeteer`都可以通过调用其Api实现。  


## 例举一些Puppeteer常做的事 
- 生成页面PDF 
- 抓取SPA页面内容，生成渲染的内容 
- 辅助自动化测试，可以自动化提交表单 
- 简单的爬虫，爬取网站内容 
我们会通过一个个小demo，来了解Puppeteer 

## demo的使用 在demos目录里，一共有 
- automation 
- pdf
- screenshot
- seo
- simpleCrawler 
共5个目录，每个目录都是一个小demo 

你需要先在先安装一下，在项目的根目录下 `npm install` 如果你需要看automation目录下demo的演示，你可以 `node demos/automation/index.js`，其他的demo