import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LoggedInNav from './Navigation/LoggedInNav';
import classNames from 'classnames/bind';
import styles from './Navigation/navigation.css';

const cx = classNames.bind(styles);

const MainWrapper = (props) => {
    return (
      <div>
        <LoggedInNav currentSettingsView={props.currentSettingsView} switchSettings={props.switchSettings} currentScene={props.currentScene} viewScene={props.viewScene}  />
        {props.children}
      </div>
    );
};

export default MainWrapper;
