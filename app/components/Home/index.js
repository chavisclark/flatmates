import React, {Component} from 'react'
import Navigation from '../Navigation'
import classNames from 'classnames/bind'
import styles from 'css/main'

const cx = classNames.bind(styles);

export default class Home extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className={cx("full-screen")}>
          <div>
            <h1 className={cx("header")}>FlatMates</h1>
            <br/>
          </div>
        </div>
      </div>

    )
  }
}