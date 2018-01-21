const React = require('react');
const PropTypes = require('prop-types');

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      speed: props.speed
    };
  }

  componentDidMount() {
    let stopper = `${this.props.text}...`;

    this.interval = window.setInterval(function() {
      if(this.state.text === stopper) {
        this.setState({
            text: this.props.text
          })
      } else {
        this.setState(function(prevState) {
          return {
            text: `${prevState.text}.`
          }
        })
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
        <p className='loading'>
          {this.state.text}
        </p>
      )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Fetching',
  speed: 200
}

module.exports = Loading;
