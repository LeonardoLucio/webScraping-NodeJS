const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://instagram.fubt1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/150456289_876278182918330_3072960351540190186_n.jpg?tp=1&_nc_ht=instagram.fubt1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=yqzD_SknEnoAX8RBlK9&edm=ABfd0MgBAAAA&ccb=7-4&oh=7fe79404091985f7ffaa058814b064b1&oe=60C01BAE&_nc_sid=7bff83');
  await page.screenshot({ path: 't.png' });

  await browser.close();
})();