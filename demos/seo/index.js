const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const ASSETS_DIR = './assets';
const filePath = path.join(__dirname, ASSETS_DIR);

async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1440,
      height: 800
    }
  });
  
  const page = await browser.newPage();
  // 我们打开一个SPA页面，可以更好的验证
  await page.goto('https://www.vipkid.com/zh-hk/', {
    waitUntil: 'networkidle2',
    timeout: 0
  });
  const content = await page.content();
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  };
  const fileName = path.join(filePath, `${Date.now()}.html`);
  fs.writeFileSync(fileName, content);
  await browser.close();
};

main();