import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './profile.css';
import home from 'images/residential-block-profile.svg';

const cx = classNames.bind(styles);

const Profile = ({ state }) => {
  const {info} = state.user;
    return (
      <figure className={cx('card')}>
        <img src={'https://robohash.org/'+info.email+'?set=set2&bgset=bg1'} alt={info.name}  className={cx('imageHeight')} alt="home" />
        <figcaption>
          <h2 className={cx('name')}>{info.name}<span className={cx(info.gender)}></span></h2>
          <span className={cx('title')}>{info.job}</span>
          <span className={cx('company')}>{info.company}</span>
          <span className={cx('location')}><span className={cx('pin')}></span> {info.location}</span>
          <p className={cx('cards', 'bio')}>{info.bio}</p>
          <a href={'mailto:'+info.email+'?Subject=Hello%20from%20WG-Zimmer'} className={cx('follow')}>Contact</a>
          <a href={'//'+info.website} className={cx('info')}>More About Me</a>
        </figcaption>
      </figure>
    );
};

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Profile);