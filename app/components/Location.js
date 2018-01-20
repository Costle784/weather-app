const React = require('react');
const api = require('../utils/api');

class Location extends React.Component {
  constructor() {
    super();
    this.state = {
      zip:""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var value = event.target.value;

    this.setState(function() {
      return {
        zip:value
      }
    })
  }
  handleClick(e) {
    e.preventDefault();
    api.getWeather(this.state.zip)
  }

  render() {
    return (
      <div className='location-container'>
        <div className='location'>
          <label htmlFor='location' className='location-label'>
            Enter a Zip Code
          </label>
          <input
            id='location'
            placeholder='20817'
            type='text'
            autoComplete='off'
            value={this.state.zip}
            onChange={this.handleChange}
            className="location-input"
          />
          <button
            className='button'
            type='submit'
            disabled={!this.state.zip}
            onClick={this.handleClick}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

module.exports = Location;
