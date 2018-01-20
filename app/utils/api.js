const axios = require('axios');
const key = 'b87ef13e00bc9136960cd7c0541a91b3'

module.exports = {
  getCurrentWeather: function(zip) {
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${key}`
    return axios.get(url).then((response) => {
      return response.data
    })
  },
  getFiveDay: function(zip) {
    let fiveDayUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip}&APPID=${key}&cnt=5`
    return axios.get(fiveDayUrl).then((response) => {
      return response.data
    })
  }
}
