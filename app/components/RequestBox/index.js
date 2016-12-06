import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Modal from '../Modal';
import styles from './requestbox.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RequestBox = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
      <div className={cx('container', {
        waiting: props.isWaiting
      })}>
        <div>
          <nav className={cx('navigation')}>
            <span className={cx('settings')}>
            ⚙
            </span>
            <span className={cx('logo')}>
            Cheers
            </span>
            <span className={cx('activities')}>
            🍻
            </span>
          </nav>
          <div className={cx('loading')}>
            <div className={cx('loader')}></div>
          </div>
          <div className={cx('sub-container')}>
            <form id="quest" onSubmit={handleSubmit(data => {
              data.expire = props.expire; 
              props.handleOnSubmit(data) 
            })}>
              <Field component="input" 
              className={cx('input')}
              type="text"
              name="text"
              placeholder="What's your activity?" />
              <p className={cx('message', {
                'message-show': props.message && props.message.length > 0
              })}>{props.message}</p>
            </form>
            <button onClick={props.openPopup} className={cx('button')}>
              Find
            </button>
          </div>
        </div>
        <Modal isOpen={props.isOpen} closePopupProp={props.closePopup}>
          <div>
            <button onClick={props.OnToday}>Today</button>
            <button onClick={props.OnTomorrow}>Tomorrow</button>
            <button onClick={props.OnAny}>Any</button>
          </div>
        </Modal>
      </div>
  )
}

export default reduxForm({
  form: 'RequestBox'
})(RequestBox)

