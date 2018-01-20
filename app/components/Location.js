const React = require('react');

class Location extends React.Component {
  render() {
    return (
      <div className='location-container'>
        <div className='location'>
          <label htmlFor='location' className='location-label'>
            Enter a City and State
          </label>
          <input
            id='location'
            placeholder='Rockville, Maryland'
            type='text'
            autoComplete='off'
            // value={this.state.username}
            // onChange={this.handleChange}
            className="location-input"
          />
          <button
            className='button'
            type='submit'
            // disabled={!this.state.username}>
          >
          Submit
          </button>
        </div>
      </div>
    )
  }
}

module.exports = Location;
