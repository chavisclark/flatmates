import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from '../actions/users';

import hourGlassSvg from '../images/hourglass.svg';
import AuthLoginHeader from '../components/Auth/AuthLoginHeader';
import AuthRegisterHeader from '../components/Auth/AuthRegisterHeader';
import AuthForm from '../components/Auth/AuthForm';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(data) {
    let email = data.email;
    let password = data.password;
    const { manualLogin, signUp, user: { isLogin }, currentLocation } = this.props;
    
    if (isLogin && currentLocation)
      manualLogin({ email, password, currentLocation });
    if (!isLogin && currentLocation)
      signUp({ email, password, currentLocation });
  }
  
  renderHeader() {
    const { user: { isLogin } , toggleLoginMode } = this.props;
    if (isLogin) {
      return (
        <AuthLoginHeader toggleLoginMode={toggleLoginMode}/>
      );
    } else {
      return (
        <AuthRegisterHeader toggleLoginMode={toggleLoginMode}/>
      );      
    }
  }

  render() {
    const { isWaiting, message, isLogin } = this.props.user;
    return (
      <AuthForm isWaiting={isWaiting}
          message={message}
          isLogin={isLogin}
          closePopupProp={this.props.closePopupProp}
          handleOnSubmit={this.handleOnSubmit}
          renderHeader={this.renderHeader()}
          />
    );
  }
}

AuthContainer.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

function mapStateToProps({user}) {
  return {
    user
  };
}

export default connect(mapStateToProps, { manualLogin, signUp, toggleLoginMode })(AuthContainer);

