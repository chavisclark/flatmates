import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from './settings.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SettingsBox = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
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
          <div className={cx('loading')}>
            <div className={cx('loader')}></div>
          </div>
          <div className={cx('sub-container')}>
            SETTINGS
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'SettingsBox'
})(SettingsBox)

