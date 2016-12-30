import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './loggedin-nav.css';
import SettingsBox from '../../SettingsBox';

const cx = classNames.bind(styles);

const LoggedInNav = (props) => {
  const {currentScene, viewScene, switchSettings, currentSettingsView} = props;
    return (
      <nav className={cx('navigation-auth', currentScene)}>
        <span onClick={() => viewScene('settings')} className={cx('nav-item','left')}>{currentScene === 'settings' ? <SettingsBox switchSettings={switchSettings} currentSettingsView={currentSettingsView} /> : '⚙'}</span>
        <span onClick={() => viewScene('request')} className={cx('nav-item', 'middle')}></span>
        <span onClick={() => viewScene('activities')} className={cx('nav-item', 'right')}></span>
      </nav>
    );
};

export default LoggedInNav;
