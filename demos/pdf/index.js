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
  await page.goto('https://www.vipkid.com/');
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  };
  const fileName = path.join(filePath, `${Date.now()}.pdf`);
  await page.pdf({
    path: fileName
  });
  await browser.close();
}

main();