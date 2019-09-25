const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

async function displayPrice(coin, date) {
    try {
        const data = await CoinGeckoClient.coins.fetchHistory('bitcoin', {
            date: '25-9-2019'
        });
        // price = data.market_data.current_price
        console.log(data.data.market_data.current_price.usd)
      }
    catch (err) {
        console.log('Error, err.message')
    }
    }
  displayPrice();

  

 