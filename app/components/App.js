const React = require('react');
const logo = require('../images/logo.svg');
const Location = require('./Location');

const Header = () => {
  return(
    <div className="header-container">
      <img src={logo} className="logo"/>
    </div>
  )
}


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Location />
      </div>
    )
  }
}

module.exports = App;
