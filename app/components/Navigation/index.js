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
            activeClassName={cx('active')}>FlatMates</Link>
            { props.authenticated ? (
              <a onClick={props.logOut}
                className={cx('item', 'nav')} to="/">Logout</a>
            ) : (
              ""
            )}
            { props.authenticated ? (
              <Link to="/dashboard" className={cx('item', 'nav')} activeClassName={cx('active')}>Dashboard</Link>
            ) : (
              <a onClick={props.openLoginPopup} className={cx('item', 'nav')}>Log in</a>
            )}
            <Link to="/about" className={cx('item', 'nav')} activeClassName={cx('active')}>About</Link>
        </nav>
        <Modal authenticated={props.authenticated} isOpen={props.isPopupOpen} closePopupProp={props.handleClosePopup}>
          <AuthContainer />
        </Modal>
      </div>
    );
};

export default Navigation;
