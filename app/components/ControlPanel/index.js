import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './control-panel.css';

const cx = classNames.bind(styles);

const ControlPanel = (props) => {
    return (
      <div className={cx('container')}>
        <input type="range" multiple={true} defaultValue="10,80" />
        <button className={cx('logout-button')} onClick={props.logOut}>Log out</button>
      </div>
    );
};

export default ControlPanel;
