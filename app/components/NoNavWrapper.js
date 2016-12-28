import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoNavWrapper = (props) => {
    return (
      <div>
        {props.children}
      </div>
    );
};

export default NoNavWrapper;
