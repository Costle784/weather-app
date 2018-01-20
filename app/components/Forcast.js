const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');

class Forcast extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    let zip = queryString.parse(this.props.location.search)

  }




  render() {
    return(
      <div>Forcast Component</div>
    )
  }
}

module.exports = Forcast;
