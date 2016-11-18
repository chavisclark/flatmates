import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from '../Auth/login.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AddFlat = (props) => {
  const {setLocation, handleSubmit, pristine, reset, submitting} = props
  return (
      <div className={cx('login')}>
        <div className={cx('container')}>
          <div className={cx('header')}>
            <h1 className={cx('heading')}>Add New Flat</h1>
          </div>
          <div className={cx('email-container')}>
            <form onSubmit={handleSubmit(data => { 
              data.location = props.foundAddress;
              props.handleOnSubmit(data) })
            }>
              <Field component="input" 
              className={cx('input')}
              type="text"
              name="name"
              placeholder="name" />
              <Field component="input" 
              className={cx('input')}
              type="number"
              name="price"
              placeholder="Price per month" />
              <Field component="input" 
              className={cx('input')}
              type="number"
              name="beds"
              placeholder="# of beds" />
              <Field component="input" 
              className={cx('input')}
              type="number"
              name="capacity"
              placeholder="Max capacity" />
              <Field component="input" 
              className={cx('input')}
              type="text"
              name="location"
              placeholder="Location"
              onBlur={setLocation} />
              <Field component="input" 
              className={cx('input')}
              type="text"
              name="description"
              placeholder="Short description" />
              <button className={cx('button')}
                type="submit" disabled={pristine || submitting}>Add</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
  form: 'AddFlat'
})(AddFlat)

