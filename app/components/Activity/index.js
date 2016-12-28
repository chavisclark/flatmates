import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './activity.css';

const cx = classNames.bind(styles);

const Activity = (props) => {
    return (
      <div className={cx('activity_container')}>
          Activity: {props.thisOuting.text}
      </div>
    );
};

export default Activity;
