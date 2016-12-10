import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Modal from '../Modal';
import styles from './activitylist.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ActivityList = (props) => {
  const {viewRequest} = props
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
      <span className={cx('activity-item')}>...</span>
      <span className={cx('activity-item')}>...</span>
      <span className={cx('activity-item')}>...</span>
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

