import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Sort from '../Activity/sort_activity';
import classNames from 'classnames/bind';
import styles from './icon.css';

const cx = classNames.bind(styles);

const ActivityIcon = (props) => {  
  return (
    <div onClick={() => props.openSingleActivity(props.thisOuting)}  
      className={cx('activity_icon')}>

      <img src={props.thisOuting.icon} />
    
    </div>
  );
};

export default Sort(ActivityIcon);
