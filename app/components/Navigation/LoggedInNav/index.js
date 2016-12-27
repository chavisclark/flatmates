import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './loggedin-nav.css';

const cx = classNames.bind(styles);

const LoggedInNav = (props) => {
  const {currentScene} = props;
    return (
      <nav className={cx('navigation', currentScene)}>
        <span onClick={props.viewSettings} className={cx('left')}>⚙</span>
        <span onClick={props.viewRequest} className={cx('middle')}></span>
        <span onClick={props.viewActivities} className={cx('right')}></span>
      </nav>
    );
};

export default LoggedInNav;
