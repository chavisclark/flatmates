import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './settings.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SettingsBox = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
      <div className={cx('container', {
        waiting: props.isWaiting
      })}>
        <div>
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
          <div className={cx('sub-container')}>
            <div className={cx('sub-nav')}>
              <span className={cx('switcher')} onClick={props.viewProfile}> 👨 </span>
              <span className={cx('switcher')} onClick={props.viewProfileEdit}> ✏ </span>
              <span className={cx('switcher')} onClick={props.viewControlPanel}>💡 </span>
            </div>
            {props.children}
            <button onClick={props.logOut} className={cx('login-button', 'primary')}>
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'SettingsBox'
})(SettingsBox)

