import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RequestBox from '../RequestBox';
import ActivityListContainer from '../../containers/ActivityListContainer';
import classNames from 'classnames/bind';
import styles from './scenes.css';

const cx = classNames.bind(styles);

const Scenes = (props) => {
    return (
      <div className={cx('scene')}>
          { props.currentScene == 'request' ?
          <RequestBox handleOnSubmit={props.handleOnSubmit}
            expire={props.expire}
            OnToday={props.OnToday}
            OnTomorrow={props.OnTomorrow}
            OnAny={props.OnAny}
            closePopup={props.closePopup}
            openPopup={props.openPopup}
            isOpen={props.isOpen}
            viewActivities={props.viewActivities} /> :
          <ActivityListContainer  activities={props.activities} viewRequest={props.viewRequest}/>
          }
      </div>
    );
};

export default Scenes;
