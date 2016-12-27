import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from '../login.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
      <div className={cx('login', {
        waiting: props.isWaiting
      })}>
        <div className={cx('container')}>
          { props.renderHeader }
          <div className={cx('loading')}>
            <div className={cx('loader')}></div>
          </div>
          <div className={cx('email-container')}>
            <form onSubmit={handleSubmit(data => { props.handleOnSubmit(data) })}>
              <Field component="input" 
              className={cx('input')}
              type="email"
              name="email"
              placeholder="email" />
              <Field component="input" 
              className={cx('input')}
              type="password"
              name="password"
              placeholder="password" />
              <div className={cx('hint')}>
              <div>Hint</div>
              <div>email: example@cheers-app.com <br />password: knowsyourname</div>
              </div>
              <p className={cx('message', {
                'message-show': props.message && props.message.length > 0
              })}>{props.message}</p>
              <button className={cx('button')}
                type="submit" disabled={pristine || submitting}>{props.isLogin ? 'Login' : 'Register'}</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'AuthForm'
})(AuthForm)

