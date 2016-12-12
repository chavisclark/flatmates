import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Modal from '../Modal';
import styles from './activitylist.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ActivityList = (props) => {
  const {viewRequest, outings} = props;
  const outingsToday = outings.filter((outing) => {
    let exDate = new Date(outing.expire);
    console.log(new Date(outing.expire))
    return exDate > outing.sentDate;
  })
  let MappedTodaysOutings = outingsToday.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  
  return (
      <div className={cx('container', {
        waiting: props.isWaiting
      })}>
      <div>
        <button onClick={viewRequest} className={cx('request-toggle')}>
        View Request
        </button>
      </div>
      <h1>Today</h1>
      {MappedTodaysOutings}
      <h1>Tomorrow</h1>
      <span className={cx('activity-item')}>...</span>
      <span className={cx('activity-item')}>...</span>
      <span className={cx('activity-item')}>...</span>
      <h1>Any</h1>
      <span className={cx('activity-item')}>...</span>
      <span className={cx('activity-item')}>...</span>
      <span className={cx('activity-item')}>...</span>
      </div>
  )
}

export default reduxForm({
  form: 'ActivityList'
})(ActivityList)

