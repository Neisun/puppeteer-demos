const puppeteer = require('puppeteer');
const inputText = '魔镜魔镜告诉我，谁是世界上最帅的人?';


async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1440,
      height: 800
    }
  });

  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');
  // 找到输入框
  const searchBox = await page.$('#kw');
  for(let i = 0; i < inputText.length; i++) {
    await searchBox.type(inputText[i], {
      delay: 300
    });
  };
  await page.click('#su');
};

main();