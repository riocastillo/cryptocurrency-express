document.querySelector(".button").addEventListener("click", crypto)

function crypto() {
  let symbols = document.querySelector('#crypto').value
  const url = (`https://cors-anywhere.herokuapp.com/https://api.lunarcrush.com/v2?data=assets&key=7go5ymwp08iu332bz58dz8&symbol=${symbols}`)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.querySelector('.N').innerText = data.data[0].name
      document.querySelector('.p').innerText = "$" + data.data[0].price
      document.querySelector('.r').innerText = "Current Rank:" + " " + data.data[0].market_cap_rank
      document.querySelector('.s').innerText = "Symbol:" + " " + data.data[0].symbol
    })
}
function fetchCrypto() {
  let symbols = "BTC,ETC,ETH,DOGE,UNI,LTC,BCH,LINK"
  const url = (`https://cors-anywhere.herokuapp.com/https://api.lunarcrush.com/v2?data=assets&key=7go5ymwp08iu332bz58dz8&symbol=${symbols}`)
  fetch(url)
    .then(res => res.json())
    .then(data => {
      let innerHTML = ""
      data.data.forEach(element => {
        innerHTML = innerHTML + "<tr><td>" + element.name + "</td><td>" + "$ " + (element.price).toFixed(2) + "</td><td>" + element.market_cap_rank + "</td><td>" + element.symbol + "</td></tr>"
      });
      document.querySelector('#data').innerHTML = innerHTML
      if (data.data[0].high > 1) {
        document.querySelector('#print').innerHTML = Math.floor(data.data[0].high)
      } else {
        document.querySelector('#print').innerHTML = data.data[0].high
      }

    })
    .catch(err => {
      console.error("Error - couldn't find results, sorry!" + err)
    })
}
fetchCrypto()