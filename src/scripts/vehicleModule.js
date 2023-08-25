

export async function calculateYield(invAmount, startDate, duration, invVehicle) {

    const growth = await getGrowth(startDate, duration, invVehicle)
    const totalYield = invAmount * growth
    console.log(totalYield)
    const fetcher = document.getElementById("apifetcher");
    fetcher.innerText = totalYield
    
}



async function getGrowth(startDate, duration, invVehicle) {

return await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${invVehicle}&apikey=MKK0K02W1J79A7UI`)
.then(res => {
  return res.json();
})
.then(json => {
  console.log(json);
  const startPrice = json["Monthly Time Series"][`${startDate}-01-31`]["1. open"]
  const endPrice = json["Monthly Time Series"][`${startDate + duration}-12-31`]["1. open"]
  const startPriceInt = parseFloat(startPrice)
  const endPriceInt = parseFloat(endPrice)
  const veGrowth = (endPriceInt/startPriceInt)
  return veGrowth
});

};



