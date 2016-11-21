import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.css';

const cx = classNames.bind(styles);

const Button = (props) => {
  return (
    <span className={cx('trav-btn')} 
          onClick={props.startSearch().init()}>
      <span>Search</span>
    </span>
  )
}

export default Button;