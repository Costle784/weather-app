const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const logo = require('../images/logo.svg');
const Location = require('./Location');
const Forcast = require('./Forcast');

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
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/' component={Location} />
            <Route exact path='/forcast' component={Forcast} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
