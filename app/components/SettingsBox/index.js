import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './settings.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);



//Add OnChange event 
//
//
//
// Start toggle on "Profile"


const SettingsBox = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
      <div className={cx('container', {
        waiting: props.isWaiting
      })}>
        <div>
          <div className={cx('sub-container')}>
            <div className={cx('sub-nav')}>
              <input id="s1On" name="s1" type="radio"  value="1" hidden/>
              <label htmlFor="s1On" className={cx('switch', 'switch--on')} onClick={props.viewProfile} checked={true}>Profile</label>
              <input id="s1Off" name="s1" type="radio" value="0" hidden />
              <label htmlFor="s1Off" className={cx('switch', 'switch--off')} onClick={props.viewControlPanel}>Control Panel</label>
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

