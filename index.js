const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/leoblack_caps/');


  const imgList = await page.evaluate(() => {
      // executa a funcao no browser

      // pegar as imagens pela dom
      const nodeList = document.querySelectorAll('article img')
    
      //transforma o Nodelist em array
      const imgArray = [...nodeList]

      // transformar em objeto JS
      const imgList = imgArray.map(img => ({

        src: img.src
      }))

      return imgList

  });


  // escrever os dados em um arquivo local (json)
  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
      if(err) throw new Error(' something went wrong')

      console.log('well done')
      })
  await browser.close();
})();