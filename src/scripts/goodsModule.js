export async function determineQuantities(totalYield, endDate, preferences) {

    let yieldHash = {};
    const basket = "";
    const fetcher2 = document.getElementById("apifetch");

    Object.keys(preferences).forEach(async key => {

        const goodExpense = (preferences[key]/100) * totalYield
        const endPrice = await fetch(`https://www.alphavantage.co/query?function=${key.toUpperCase()}&interval=annual&apikey=MKK0K02W1J79A7UI`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
          debugger
          const endPrice = json["data"][`${new Date().getFullYear() - endDate - 1}`]["value"]
          return parseFloat(endPrice);
        });

        const quantity = goodExpense/endPrice;
     
        yieldHash[key] = quantity;
        fetcher2.innerText += `${yieldHash[key]}  ${key}'s`;
    })

    
    console.log(yieldHash);
};