import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Sort from './sort_activity';
import classNames from 'classnames/bind';
import styles from './activity.css';

const cx = classNames.bind(styles);

const Activity = (props) => {
  const {thisOuting, closeScene} = props;
    return (
      <div className={cx('activity_container')}>
        <button onClick={props.closeScene} className={cx('close_button')}>
          X
        </button>
        <div className={cx('activity_icon')}>
            <img src={thisOuting.icon} />
        </div>
        <div className={cx('activity_title')}> 
          {thisOuting.text}
        </div>
        <div className={cx('participant_list')}>
          <div className={cx('participants', 'pending')}>
              <img src={thisOuting.icon} />
          </div>
          <div className={cx('participants', 'pending')}>
              <img src={thisOuting.icon} />
          </div>
          <div className={cx('participants', 'accepted')}>
              <img src={thisOuting.icon} />
          </div>
        </div>
      </div>
    );
};

export default Sort(Activity);
