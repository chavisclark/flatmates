import React, {Component} from 'react';
import classNames from 'classnames/bind';
import {Link} from 'react-router';
import styles from './navigation.css';

const cx = classNames.bind(styles);

export default class Navigation extends Component {

  render() {
    return (
      <nav className={cx("navbar")}>
        <div className={cx("logo")}>
          Flatmates
        </div>
      </nav>

    )
  }
}