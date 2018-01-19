const React = require('react');
const logo = require('../images/logo.svg')

const Header = () => {
  return(
    <div>
      <img src={logo} className="logo"/>
    </div>
  )
}


class App extends React.Component {
  render() {
    return (
      <Header />
    )
  }
}

module.exports = App;
