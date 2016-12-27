import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './navigation.css';

const cx = classNames.bind(styles);

const Navigation = (props) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <Link to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>Cheers</Link>

          { props.authenticated ? (
            <Link to="/dashboard" className={cx('item', 'nav')} activeClassName={cx('active')}>Dashboard</Link>
          ) : (
            ""
          )}
      </nav>
    );
};

export default Navigation;
