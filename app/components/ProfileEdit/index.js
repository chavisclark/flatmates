import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames/bind';
import styles from './profile-edit.css';
const cx = classNames.bind(styles);

const genders = [ 'male', 'female' ]

let ProfileEdit = props => {
  const { email, onEntryChange, handleSubmit, loaded, pristine, reset, submitting } = props
  let renderHeader = () => {
    return (
      <div className={cx('header')}>
        <h1 className={cx('heading')}>My Info</h1>
      </div>
    );
  }
  let renderPic = () => {
      var avatar = 'https://robohash.org/'+email+'?set=set2&bgset=bg1';
    return (
        <center>
        <img src={avatar} className={cx('profile')}/>
        </center>
    );
  }
  let submit = pristine ? 'undo' : 'submit';
    return (
      <div className={cx('login')}>
        <div className={cx('container')}>
          { renderHeader() }
          { renderPic() }
          <div className={cx('email-container')}>
            <form onSubmit={handleSubmit(data => {
                      onEntryChange(data)
                      })}>
              <div>
                <label>Name</label>
                <div>
                  <Field className={cx('input')} name="name" component="input" type="text" placeholder="Name"/>
                </div>
              </div>
              <div>
                <label>Email</label>
                <div>
                  <Field className={cx('input')} name="email" component="input" type="text" placeholder="Email"/>
                </div>
              </div>
              <div>
                <label>Sex</label>
                <div>
                  <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
                  <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
                </div>
              </div>
              <span className={cx('space')}></span>
              <div>
                <label>Occupation</label>
                <div>
                  <Field className={cx('input')} name="job" component="input" type="text" placeholder="Occupation"/>
                </div>
              </div>
              <div>
                <label>Bio</label>
                <div>
                  <Field className={cx('input')} name="bio" component="textarea"/>
                </div>
              </div>
              <div>
                <label>Location</label>
                <div>
                  <Field className={cx('input')} name="location" component="input" type="text" placeholder="Location"/>
                </div>
              </div>
              <div>
                <label>Company</label>
                <div>
                  <Field className={cx('input')} name="company" component="input" type="text" placeholder="Company"/>
                </div>
              </div>
              <div>
                <label>Website</label>
                <div>
                  <Field className={cx('input')} name="website" component="input" type="text" placeholder="Website"/>
                </div>
              </div>
              <div>
                <button className={cx('button', submit)} type="submit" disabled={pristine || submitting}>Submit</button>
                <span className={cx('space')}></span>
                <button className={cx('button', submit)} type="button" disabled={pristine || submitting} onClick={reset}>Undo Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    )
}

ProfileEdit = reduxForm({
  form: 'ProfileEdit'
})(ProfileEdit)

ProfileEdit = connect(
  state => ({
    initialValues: state.user.info
  })
)(ProfileEdit)

export default ProfileEdit