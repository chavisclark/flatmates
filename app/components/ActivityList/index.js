import React from 'react';
import Modal from '../Modal';
import ActivityIcon from '../ActivityIcon';
import styles from './activitylist.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ActivityList = (props) => {
  const {openSingleActivity, TodaysOutings, TomorrowsOutings, AnyOutings} = props;
  const RenderTodaysOutings = TodaysOutings.map((outing, index) => <ActivityIcon key={index} thisOuting={outing} openSingleActivity={openSingleActivity}/>);
  const RenderTomorrowsOutings = TomorrowsOutings.map((outing, index) => <ActivityIcon key={index} thisOuting={outing} openSingleActivity={openSingleActivity}/>);
  const RenderAnyOutings = AnyOutings.map((outing, index) => <ActivityIcon key={index} thisOuting={outing} openSingleActivity={openSingleActivity}/>);
  
  return (
      <div className={cx('container')}>
        <div>
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

