import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './loggedin-nav.css';

const cx = classNames.bind(styles);

const LoggedInNav = (props) => {
    console.log(props)
    return (
      <nav className={cx('navigation')}>
        <span onClick={props.viewSettings} className={cx('settings')}>
        ⚙
        </span>
        <span onClick={props.viewRequest} className={cx('logo')}>
        Cheers
        </span>
        <span onClick={props.viewActivities} className={cx('activities')}>
        🍻
        </span>
      </nav>
    );
};

export default LoggedInNav;
