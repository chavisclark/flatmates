import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './actionbox.css';
import Modal from '../Modal';
import AuthContainer from '../../containers/AuthContainer';

const cx = classNames.bind(styles);

const ActionBox = (props) => {
    return (
      <div>
            { props.authenticated ? (
              ""
            ) : (
              <div className={cx('home_actions')}>
                <button onClick={props.openLoginPopup} className={cx('login-button', 'primary')}>
                  <span>Log in</span>
                </button>
                <button className={cx('login-button', 'secondary')}>
                  <span> Learn More</span>
                </button>
              </div>
            )}
        <Modal authenticated={props.authenticated} isOpen={props.isPopupOpen} closePopupProp={props.handleClosePopup}>
          <AuthContainer />
        </Modal>
      </div>
    );
};

export default ActionBox;
