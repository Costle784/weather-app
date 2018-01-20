const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');
const helpers = require('../utils/helpers');

class Forcast extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTemp:0,
      city:""
    }
  }
  componentDidMount() {
    let params = queryString.parse(this.props.location.search)
    api.getWeather(params.zip).then((response) => {
      let temp = helpers.toFahrenheit(response.main.temp);
      this.setState({
        city: response.name,
        currentTemp: temp,
        icon: response.weather[0].icon
      });
    })
  }
  render() {

    return(
      <div className='column'>
        <h1 className='title'>{this.state.city}</h1>
        <h2 className='title'>{this.state.currentTemp}&#176;</h2>
        <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`}></img>
      </div>
    )
  }
}

module.exports = Forcast;
