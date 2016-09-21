import React from 'react'
import classNames from 'classnames/bind'
import styles from 'css/main'

const cx = classNames.bind(styles);

export default class Home extends React.Component {

  render() {
    return (
      <div className={cx("full-screen")}>
        <div>
          <h1 className={cx("header")}>FlatMates</h1>
          <br/>
          <a className={cx("button-line")} href="/">Home</a> 
        </div>
      </div>

    )
  }
}