import User from "./scripts/user";
import Scenario from "./scripts/scenario";
import {calculateYield} from "./scripts/vehicleModule";
import {determineQuantities} from "./scripts/goodsModule";

// const yahooFinance = require('yahoo-finance');

document.addEventListener("DOMContentLoaded", async function() {
    console.log("Hello world!");
    
    // const main = document.getElementById("main");
    // new Example(main)
//     await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=MKK0K02W1J79A7UI')
//   .then(res => {
//     return res.json();
//   })
//   .then(json => {
//     console.log(json);
//     const startPrice = json["Monthly Time Series"]["1999-12-31"]["1. open"]
//     const fetcher = document.getElementById("apifetcher");
//     fetcher.innerText = startPrice
//   });
  const testButtonYield = document.querySelector(".testbuttonyield");
  testButtonYield.addEventListener("click", () => calculateYield(1000, 2003, 10, "GS"));

  const testButtonGoods = document.querySelector(".testbuttongoods");
  testButtonGoods.addEventListener("click", () => determineQuantities(10000, 2013, {"WHEAT": 70, "CORN": 30}));

});


