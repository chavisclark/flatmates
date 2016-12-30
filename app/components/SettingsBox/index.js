import React from 'react';
import styles from './settings.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SettingsBox = props => {
  const {currentSettingsView, switchSettings} = props;
  return (
    <div className={cx('sub-nav')}>
      <input id="s1On" name="s1" className={ cx('switches') } type="radio" value={'profile'} checked={currentSettingsView === 'profile'} onChange={switchSettings} />
      <label htmlFor="s1On" className={ cx('switch', 'switch--on') }>Profile</label>
      <input id="s1Off" name="s1" className={ cx('switches') }  type="radio" value={'controls'} checked={currentSettingsView === 'controls'} onChange={switchSettings} />
      <label htmlFor="s1Off" className={ cx('switch', 'switch--off') }>Settings</label>
    </div>
  )
}

export default SettingsBox;