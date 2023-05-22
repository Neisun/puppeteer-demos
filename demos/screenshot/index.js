const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
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
  await page.goto('https://www.vipkid.com/zh-hk/');
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
  const fileName = path.join(filePath, `screenshot_${Date.now()}.jpg`);
  await page.screenshot({
    path: fileName,
    quality: 90,
    fullPage: true
  });
  await browser.close();
};

main();