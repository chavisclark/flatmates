import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './profile.css';
import home from 'images/residential-block-profile.svg';

const cx = classNames.bind(styles);

const Profile = ({ state, viewProfileEdit }) => {
  const {email, name, job, company, location, bio, website, gender} = state.user.info;
  var avatar = 'https://gravatar.com/avatar/bf039ae8736a6cedb03a29358565c608';
    return (
      <div className={cx('login')}>
        <figure className={cx('card')}>
        <span className={cx('edit')} onClick={viewProfileEdit}> edit ✏ </span>
          <img src={avatar} className={cx('imageHeight')} />
          <figcaption>
            <h2 className={cx('name')}>{name}<span className={cx(gender)}></span></h2>
            <span className={cx('title')}>{job}</span>
            <span className={cx('company')}>{company}</span>
            <span className={cx('location')}><span className={cx('pin')}></span> {location}</span>
            <p className={cx('cards', 'bio')}>{bio}</p>
            <a href={'mailto:'+email+'?Subject=Hello%20from%20WG-Zimmer'} className={cx('follow')}>Contact</a>
            <a href={'//'+website} className={cx('info')}>More About Me</a>
          </figcaption>
        </figure>
      </div>
    );
};

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Profile);