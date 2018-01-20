const axios = require('axios');
const key = 'b87ef13e00bc9136960cd7c0541a91b3'

module.exports = {
  getWeather: function(zip) {
    let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${key}`
    return axios.get(url).then((response) => {
      console.log(response.data)
    })
  }
}
