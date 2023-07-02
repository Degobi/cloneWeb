import '@babel/register';
import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

async function scrapeWebsite() {
  try {
    await scrape({
      urls: ['https://ultracolageno3x1.shop/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.13.3'],
      directory: 'C:\\Users\\Degobi\\Desktop\\Thiago\\arquivo\\anim',
      plugins: [
        new PuppeteerPlugin({
          launchOptions: { headless: false }, // opcional
          scrollToBottom: { timeout: 10000, viewportN: 10 }, // opcional
          blockNavigation: true, // opcional
        })
      ]
    });

    console.log('Scrapping concluído com sucesso.');
  } catch (error) {
    console.error('Ocorreu um erro durante o scrapping:', error);
  }
}

scrapeWebsite();
