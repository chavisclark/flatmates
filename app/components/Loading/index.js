import React, { PropTypes, Component } from 'react';
import classNames from 'classnames/bind';
import styles from './loading.css';

const cx = classNames.bind(styles);

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.originalText = this.props.text;
    this.state = {
      text: this.originalText
    }
  }
  
  componentDidMount() {
    var stopper = this.originalText + '...';
    var message;
    this.interval = setInterval(function () {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), this.props.speed)
  }


  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    var {text} = this.state; 
    return (
        <div className={cx('container')}>
          <p className={cx('content')}>{text}</p>
        </div>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300  
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}
