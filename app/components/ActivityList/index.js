import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Modal from '../Modal';
import styles from './activitylist.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ActivityList = (props) => {
  const {viewRequest, viewSettings, viewActivities, outings} = props;
  var todaysDate = new Date();
  var endOfToday = new Date(new Date().setHours(24,0,0,0));

  const outingsToday = outings.filter((outing) => {
    var expirationDate = new Date(outing.expire)
    return expirationDate > todaysDate && expirationDate <= endOfToday
  })

  const outingsTomorrow = outings.filter((outing) => {
    var expirationDate = new Date(outing.expire)
    return expirationDate > todaysDate && expirationDate > endOfToday
  })

  const outingsAny = outings.filter((outing) => !outing.expire)

  const RenderTodaysOutings = outingsToday.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  const RenderTomorrowsOutings = outingsTomorrow.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  const RenderAnyOutings = outingsAny.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  
  return (
      <div className={cx('container', {
        waiting: props.isWaiting
      })}>
        <div>
          <nav className={cx('navigation')}>
            <span onClick={viewSettings} className={cx('settings')}>
            ⚙
            </span>
            <span onClick={viewRequest} className={cx('logo')}>
            Cheers
            </span>
            <span onClick={viewActivities} className={cx('activities')}>
            🍻
            </span>
          </nav>
          <div className={cx('loading')}>
            <div className={cx('loader')}></div>
          </div>
          <div className={cx('sub-container')}>
            <h1>Today</h1>
            {RenderTodaysOutings}
            <h1>Tomorrow</h1>
            {RenderTomorrowsOutings}
            <h1>Any</h1>
            {RenderAnyOutings} 
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'ActivityList'
})(ActivityList)

