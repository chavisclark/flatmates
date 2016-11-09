import React from 'react';
import styles from '../Authenticate/login.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthRegisterHeader = (props) => {
  return (
    <div className={cx('header')}>
      <h1 className={cx('heading')}>Register with Email</h1>
      <div className={cx('alternative')}>
        Already have an account?
        <a className={cx('alternative-link')}
          onClick={props.toggleLoginMode}> Login</a>
      </div>
    </div>
  )
}

export default AuthRegisterHeader;