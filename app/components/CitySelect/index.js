import React from 'react';
import classNames from 'classnames/bind';
import styles from './citySelect.css';

const cx = classNames.bind(styles);

const CitySelect = (props) => {
    return (
      <select className={cx("input")} onChange={props.handleCitySelect}>
        <option value={props.selectedId}>{props.selectedCity}</option>
        {props.options}
      </select>
    )    
}

export default CitySelect;