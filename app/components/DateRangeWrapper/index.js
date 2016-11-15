import React, {Component} from 'react';
import classNames from 'classnames/bind'
import styles from './react-dates.css';
const cx = classNames.bind(styles)

const DateRangeWrapper = (props) => {
    return (
      <div>
        {props.children}
        <span className={cx('trav-btn')} onClick={props.handleDates}>
          <span>Search</span>
        </span>
      </div>
    );
}

export default DateRangeWrapper;