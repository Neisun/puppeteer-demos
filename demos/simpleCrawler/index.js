const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
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
  await page.goto('https://image.baidu.com/', {
    timeout:0
  });
  const searchBox = await page.$('#kw');
  const inputText = '小猫咪';
  for(let i = 0; i < inputText.length; i++) {
    await searchBox.type(inputText[i], {
      delay: 300
    })
  };
  await page.click('.s_newBtn');
  
  await page.waitForNavigation({
    waitUntil: 'networkidle2',
    timeout: 0
  });
  // 得到dom
  const imgLinks = await page.$$eval('img.main_img', imgs => imgs.map(img => img.src));

  console.log(imgLinks);
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }

  for (let i = 0; i < imgLinks.length; i++) {
    const imgUrl = imgLinks[i];
    const fileName = path.join(filePath, `${i}_${Date.now()}.jpg`);
    
    const resp = await axios({
      method: 'GET',
      url: imgUrl,
      responseType: 'stream'
    });

    resp.data.pipe(fs.createWriteStream(fileName));
  };

  await browser.close();
}

main();