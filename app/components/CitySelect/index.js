import React from 'react';
import classNames from 'classnames/bind';
import styles from './citySelect.css';

const cx = classNames.bind(styles);

const CitySelect = (props) => {
    return (
      <div className={cx('container')}>
        <input className={cx('input')}
               type="text"
               name="location"
               placeholder="Where"
               onBlur={props.setLocation} />
      </div>
    )    
}

export default CitySelect;