const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pageUrl = 'https://yjiq150.github.io/coronaboard-crawling-sample/http-api-with-button';
  // const pageUrl = 'http://localhost:3000/';

  await page.goto(pageUrl, { waitUntil: 'networkidle0' });
  await page.click('input[type="button"]');

  await page.waitForFunction(() => {
    return document.querySelector('#content').textContent.length > 0;
  });

  const content = await page.$$eval('#content', (elements) => elements[0].textContent);

  console.log(content);

  await browser.close();
};

main();

// 'https://yjiq150.github.io/coronaboard-crawling-sample/http-api-with-button'
