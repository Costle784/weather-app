const React = require('react');

class Main extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <div className='main'>
          <label htmlFor='location'>
            Enter a City and State
          </label>
          <input
            id='location'
            placeholder='Rockville, Maryland'
            type='text'
            autoComplete='off'
            // value={this.state.username}
            // onChange={this.handleChange}
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

module.exports = Main;
