const React = require('react');
const Link = require('react-router-dom').Link;


const Err = () => {
  return(
    <div className='column'>
      <h1 className='title'>Please Enter a Valid Zip Code</h1>
      <Link className='reset' to='/'>Reset</Link>
    </div>
  )
}

module.exports = Err;
