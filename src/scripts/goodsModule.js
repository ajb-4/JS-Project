export async function determineQuantities(totalYield, endDate, preferences, scen) {

    let yieldHash = {};
    const basket = "";

    const fetcher2 = document.getElementById(`apifetch${scen}`);

    const enddatesum = document.getElementById(`enddatesum${scen}`)
    enddatesum.innerHTML = `End Date: ${endDate}`


    Object.keys(preferences).forEach(async key => {

        const goodExpense = (preferences[`${key}`]/100) * totalYield
        const endPrice = await fetch(`https://www.alphavantage.co/query?function=${key.toUpperCase()}&interval=annual&apikey=GBZGO0T0WE931AOX`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          console.log(json);
          const endPrice = json["data"][`${new Date().getFullYear() - endDate - 1}`]["value"]
          debugger
          return parseFloat(endPrice);
        });

        const quantity = goodExpense/endPrice;
        debugger
        yieldHash[key] = quantity;
        
        // fetcher2.innerText += `${key}: ${yieldHash[key]}`;

        const commsum = document.getElementById(`${key}sum${scen}`);
        commsum.innerHTML = `${key}: ${yieldHash[key].toFixed(2)} pounds @ $${(endPrice/100).toFixed(2)}/pound`

    })

    
    console.log(yieldHash);
};