import React from 'react';
import Modal from '../Modal';
import styles from './activitylist.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ActivityList = (props) => {
  const {viewRequest, viewSettings, viewActivities, TodaysOutings, TomorrowsOutings, AnyOutings} = props;
  const RenderTodaysOutings = TodaysOutings.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  const RenderTomorrowsOutings = TomorrowsOutings.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  const RenderAnyOutings = AnyOutings.map((outing, index) => (<span key={index} className={cx('activity-item')}>{outing.text}</span>));
  
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

export default ActivityList;

