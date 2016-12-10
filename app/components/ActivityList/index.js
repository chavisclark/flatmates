import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Modal from '../Modal';
import styles from './requestbox.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ActivityList = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
      <div className={cx('container', {
        waiting: props.isWaiting
      })}>
        ActivityList Here


      </div>
  )
}

export default reduxForm({
  form: 'ActivityList'
})(ActivityList)

