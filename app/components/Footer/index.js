import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './footer.css';

const cx = classNames.bind(styles);

const Footer = (props) => {
    return (
      <div className={cx('footer')}>
      Footer stuff
      </div>
    );
};

export default Footer;
