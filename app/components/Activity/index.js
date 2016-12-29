import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Sort from './sort_activity';
import classNames from 'classnames/bind';
import styles from './activity.css';

const cx = classNames.bind(styles);

const Activity = (props) => {
    return (
      <div className={cx('activity_container')}>
        <div className={cx('activity_icon')}>
            <img src={props.thisOuting.icon} />
        </div>
        <div className={cx('activity_title')}> 
          {props.thisOuting.text}
        </div>
      </div>
    );
};

export default Sort(Activity);
