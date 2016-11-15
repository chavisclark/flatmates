import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from '../actions/users';

import hourGlassSvg from '../images/hourglass.svg';
import AuthLoginHeader from '../components/AuthLoginHeader'
import AuthRegisterHeader from '../components/AuthRegisterHeader'
import AuthForm from '../components/AuthForm'

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(data) {
    let email = data.email;
    let password = data.password;
    const { manualLogin, signUp, user: { isLogin } } = this.props;
    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
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

