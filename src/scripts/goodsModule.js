export async function determineQuantities(totalYield, endDate, preferences) {

    let yieldHash = {};

    Object.keys(preferences).forEach(async function (key){
        const goodExpense = (preferences[key]/100) * totalYield
        const endPrice = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${key}&apikey=MKK0K02W1J79A7UI`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
          const endPrice = json["Monthly Time Series"][`${endDate}-12-31`]["1. open"]
          return parseFloat(endPrice);
        });
        const quantity = goodExpense/endPrice
        yieldHash[key] = quantity;
    })

    return yieldHash;

};