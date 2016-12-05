import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../actions/users';
import ActionBox from '../components/ActionBox';
import dynamics from 'dynamics.js';

class ActionBoxContainer extends Component {
    constructor(props){
      super(props);
      this.handleLogOut = this.handleLogOut.bind(this);
      this.state = {
        isPopupOpen:false,
        currentLocation: [null]
      }
    }
  
    componentDidMount() {
      const vm = this;
      function success (position) {
        let lat = position.coords.latitude,
            lng = position.coords.longitude;
            
            console.info('Your coordinates are ' + lat + ', '+ lng)
            vm.setState({currentLocation: [lat, lng]})
      }

      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }
  
      navigator.geolocation.getCurrentPosition(success, error)

    }
  
    handleLogOut() {
      const { logOut } = this.props;
        logOut({null});
        this.handleClosePopup();
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
        <ActionBox logOut={this.handleLogOut} 
          authenticated={this.props.user.authenticated}
          handleClosePopup={this.handleClosePopup.bind(this)}
          isPopupOpen={this.state.isPopupOpen}
          currentLocation={this.state.currentLocation}
          openLoginPopup={this.handleOpenPopup.bind(this)} />
      );      
    }
};

ActionBoxContainer.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {logOut})(ActionBoxContainer);
