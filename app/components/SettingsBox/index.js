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
      <div className={cx('container')}>
        <div>
          <div className={cx('sub-container')}>
            <div className={cx('sub-nav')}>
              <input id="s1On" name="s1" type="radio" value={'profile'} checked={props.currentSettingsView === 'profile'} onChange={props.handleOnChange} />
              <label htmlFor="s1On" className={cx('switch', 'switch--on')}>Profile</label>
              <input id="s1Off" name="s1" type="radio" value={'controls'} checked={props.currentSettingsView === 'controls'} onChange={props.handleOnChange} />
              <label htmlFor="s1Off" className={cx('switch', 'switch--off')}>Settings</label>
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

