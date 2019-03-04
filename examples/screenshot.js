const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch({
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ]
});

const page = await browser.newPage();

await page.goto('https://synduit.com', {waitUntil: 'networkidle2'});

await page.screenshot({path: 'synduit.jpg'});

browser.close();

})();
