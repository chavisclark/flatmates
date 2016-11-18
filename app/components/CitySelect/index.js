import React from 'react';
import classNames from 'classnames/bind';
import styles from './citySelect.css';

const cx = classNames.bind(styles);

const CitySelect = (props) => {
    return (
      <div>
        <input className={cx('input')}
               type="text"
               name="location"
               placeholder="Location"
               onBlur={props.setLocation} />
        <span className={cx('trav-btn')} 
              onClick={props.startSearch(props.foundAddress).init()}>
          <span>Search</span>
        </span>
      </div>
    )    
}

export default CitySelect;