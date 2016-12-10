import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RequestBox from '../RequestBox';
import classNames from 'classnames/bind';
import styles from './scenes.css';

const cx = classNames.bind(styles);

const Scenes = (props) => {
    return (
      <div className={cx('scene')}>
          <RequestBox handleOnSubmit={props.handleOnSubmit}
            expire={props.expire}
            OnToday={props.OnToday}
            OnTomorrow={props.OnTomorrow}
            OnAny={props.OnAny}
            closePopup={props.closePopup}
            openPopup={props.openPopup}
            isOpen={props.isOpen} />
      </div>
    );
};

export default Scenes;
