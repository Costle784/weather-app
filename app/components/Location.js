const React = require('react');
const Link = require('react-router-dom').Link

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
    this.setState({
      zip:value
    })
  }

  handleClick(e) {
    if(!this.state.zip){
      e.preventDefault()
    }
  }

  render() {
    return (
      <div className='location-container'>
        <div className='column'>
          <label htmlFor='location' className='title'>
            Enter a Zip Code
          </label>
          <input
            id='location'
            placeholder='ex. 20817'
            type='text'
            autoComplete='off'
            value={this.state.zip}
            onChange={this.handleChange}
            className="location-input"
          />
          <Link
            className='button'
            type='submit'
            disabled={!this.state.zip}
            to={{ pathname: '/forecast',
                search: `zip=${this.state.zip}`
            }}
            onClick={this.handleClick}
          >
            Submit
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = Location;
