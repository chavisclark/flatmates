import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './navigation.css';
import Modal from '../Modal';
import AuthContainer from '../../containers/AuthContainer';

const cx = classNames.bind(styles);

const Navigation = (props) => {
    return (
      <div>
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
      </div>
    );
};

export default Navigation;
