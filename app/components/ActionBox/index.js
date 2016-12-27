import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './actionbox.css';
import AuthContainer from '../../containers/AuthContainer';

const cx = classNames.bind(styles);

const ActionBox = (props) => {
    let option = !props.authenticated ? '' : 'black';
    return (
      <div className={cx('home_actions')}>
          <button onClick={props.authenticated ? props.logOut : props.openLoginPopup} 
                  className={cx('login-button', 'primary')}>
            <span>{props.authenticated ? 'Log out' : 'Log in'}</span>
          </button> 
          <button onClick={props.authenticated ? props.showRequest : ''} 
                  className={cx('login-button', 'secondary', option)}>
            <span>{props.authenticated ? 'New Request' : 'Learn More'}</span>
          </button>
      </div>
    );
};

export default ActionBox;
