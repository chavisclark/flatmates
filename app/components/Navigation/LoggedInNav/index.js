import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './loggedin-nav.css';

const cx = classNames.bind(styles);

const LoggedInNav = (props) => {
  const {currentScene} = props;
    return (
      <nav className={cx('navigation-auth', currentScene)}>
        <span onClick={props.viewSettings} className={cx('nav-item','left')}>⚙</span>
        <span onClick={props.viewRequest} className={cx('nav-item', 'middle')}></span>
        <span onClick={props.viewActivities} className={cx('nav-item', 'right')}></span>
      </nav>
    );
};

export default LoggedInNav;
