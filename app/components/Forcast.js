const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');
const helpers = require('../utils/helpers');

class Forcast extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTemp:0,
      city:"",
      icon:"",
      fiveDay:[]
    }
  }
  componentDidMount() {
    let params = queryString.parse(this.props.location.search)
    api.getCurrentWeather(params.zip).then((response) => {
      let temp = helpers.toFahrenheit(response.main.temp);
      this.setState({
        city: response.name,
        currentTemp: temp,
        icon: response.weather[0].icon,
        description: response.weather[0].description
      });
    });

    api.getFiveDay(params.zip).then((response) => {
      this.setState({
        fiveDay:response.list
      })
    })
  }
  render() {
    let days = this.state.fiveDay;

    return (
      <div className='column'>
        <h1 className='title'>{this.state.city}</h1>
          <div className='current-weather-container'>
            <h2 className='temperature'>{this.state.currentTemp}&#176;</h2>
              <img
                src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
                alt={`${this.state.description} weather icon`}
                className='weather-icon'
              />

          </div>
          <div className='description'>{this.state.description}</div>


          <div className='icon-container'>
            {days.map((day, i) => {
              let high = helpers.toFahrenheit(day.temp.max);
              let low = helpers.toFahrenheit(day.temp.min);
              let date = helpers.formatDate(day.dt);

              return (
                <div key={i} className='column'>
                  <img
                    src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                    className='weather-icon'
                    alt={`${day.weather[0].description} weather icon`}>
                  </img>
                  <div className='date'>{date}</div>
                  <div className='highlow'>High: {high}&#176;</div>
                  <div className='highlow'>Low: {low}&#176;</div>
                </div>
              )
            })}

          </div>
      </div>
    )
  }
}

module.exports = Forcast;
