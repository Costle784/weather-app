module.exports = {
  toFahrenheit: function(kelvin) {
    return Math.round(kelvin * (9/5) - 459.67)
  },
  formatDate: function(date) {
    let longDate = new Date(date * 1000);
    let newDate = longDate.toString().slice(0,11);
    return newDate;
  }
}
