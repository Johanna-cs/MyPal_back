

const puppeteer = require('puppeteer')
const ObjectsToCsv = require('objects-to-csv')

try {

    (async () => {
        
        // CODE DU SCRAPING

        // ETAPE 1 : FETCHING
        // La page d'accueil sur laquelle scraper les infos 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });
        await page.goto('https://actualitte.com/thematique/35/chroniques');

        //ETAPE 2 : PARSING 
        // On retrouve les infos selon un selecteur css 
        var r = [];
        const results = await page.$$('div.article-card > a');
        for(const result of results){
            let url = await page.evaluate(el => el.getAttribute('href'), result);
            let titre = await page.evaluate(el => el.querySelector('.article-card_title').innerText.trim(), result);
            r.push([titre,url]);
        }
        console.log(r);

        //ETAPE 3 : STOCKAGE
        // On déclare ici les données enregistrées sur un fichier en csv
        const csv = new ObjectsToCsv(r)
        await csv.toDisk('chroniques.csv', { append: true })
    

    })()

} catch (err) {

    // LOG DES EXCEPTIONS DANS LA CONSOLE

    console.error(err)

  }