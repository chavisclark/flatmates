import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../state/actions/users';
import Navigation from '../components/Navigation';
import dynamics from 'dynamics.js';

class NavigationContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        isPopupOpen:false
      }
    }

    handleOpenPopup() {
        this.setState({
            isPopupOpen: true
        });
    }

    handleClosePopup() {
        this.setState({
          isPopupOpen: false
        });
    }

    animateModal() {
      // Animate the popover
      let div = document.getElementById('modal-box')
      while (div !== null) {
        dynamics.animate(div, {
          translateY: -100
        }, {
          type: dynamics.spring,
          friction: 400,
          duration: 1300
        })
      break;
      }  
    }

    componentDidUpdate() {
      if (this.state.isPopupOpen === true) {
        this.animateModal()
      }
    }

    render() {
      return (
        <Navigation authenticated={this.props.user.authenticated}
          handleClosePopup={this.handleClosePopup.bind(this)}
          isPopupOpen={this.state.isPopupOpen}
          openLoginPopup={this.handleOpenPopup.bind(this)} />
      );      
    }
};

NavigationContainer.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {logOut})(NavigationContainer);
