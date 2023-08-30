
export async function calculateYield(invAmount, startDate, duration, invVehicle, scenyield) {
    const growth = await getGrowth(startDate, duration, invVehicle)

    const totalYield = invAmount * growth
    console.log(totalYield)

    const invamountsum = document.getElementById(`invamountsum${scenyield}`)
    invamountsum.innerHTML = `Investment Amount: $${invAmount}`

    const startdatesum = document.getElementById(`startdatesum${scenyield}`)
    startdatesum.innerHTML = `Start Date: ${startDate}`

    const durationsum = document.getElementById(`durationsum${scenyield}`)
    durationsum.innerHTML = `Duration: ${duration}`

    const fetcher = document.getElementById(`apifetcher${scenyield}`);
    fetcher.innerText = `Total Yield: $${totalYield.toFixed(2)}`
    fetcher.setAttribute("value", `${totalYield}`)

    const totyieldsum = document.getElementById(`totyieldsum${scenyield}`)
    totyieldsum.innerText = `Total Yield: $${totalYield.toFixed(2)}`

    
    

    
}


async function getGrowth(startDate, duration, invVehicle) {

return await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${invVehicle}&apikey=SJIU2BU3OS272LAE`)
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



