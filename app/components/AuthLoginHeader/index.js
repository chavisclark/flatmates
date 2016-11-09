import React from 'react'
import styles from '../Authenticate/login.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthLoginHeader = (props) => {
  return (
    <div className={cx('header')}>
      <h1 className={cx('heading')}>Login with Email</h1>
      <div className={cx('alternative')}>
        Not what you want?
        <a className={cx('alternative-link')}
          onClick={props.toggleLoginMode}> Sign up</a>
      </div>
    </div>
  )
}

export default AuthLoginHeader;