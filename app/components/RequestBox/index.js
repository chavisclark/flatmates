import React from 'react';
import {Field, reduxForm} from 'redux-form';
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
            <form onSubmit={handleSubmit(data => { props.handleOnSubmit(data) })}>
              <Field component="input" 
              className={cx('input')}
              type="text"
              name="search"
              placeholder="What's your activity?" />
              <p className={cx('message', {
                'message-show': props.message && props.message.length > 0
              })}>{props.message}</p>
              <button className={cx('button')}
                type="submit" disabled={pristine || submitting}>Find</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'RequestBox'
})(RequestBox)

