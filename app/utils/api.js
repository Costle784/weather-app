const axios = require('axios');
const key = 'b87ef13e00bc9136960cd7c0541a91b3'

module.exports = {
  getWeather: function(zip) {
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${key}`
    return axios.get(url).then((response) => {
      console.log(response.data)
      return response.data

    })

    // let fiveDayUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&APPID=${key}&cnt=5`
    // return axios.get(fiveDayUrl).then((response) => {
    //   console.log(response.data)
    // })
  }
}
