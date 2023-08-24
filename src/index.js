import User from "./scripts/user";
import Scenario from "./scripts/scenario";

const yahooFinance = require('yahoo-finance');

document.addEventListener("DOMContentLoaded", async function() {
    console.log("Hello world!");
    // const main = document.getElementById("main");
    // new Example(main)
    // try {
    //     const res = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=demo');
    //     const data = await res.json();
    //     console.log(data);
    //     window.data = data;
    // } catch (err) {
    //     console.log(err);
    // }
    
    yahooFinance.historical({
        symbol: 'AAPL',
        from: '2012-01-01',
        to: '2012-12-31',
        // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
      }, function (err, quotes) {
        //...
      });
      
      // This replaces the deprecated snapshot() API
      yahooFinance.quote({
        symbol: 'AAPL',
        modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
      }, function (err, quotes) {
        // ...
      });
});
