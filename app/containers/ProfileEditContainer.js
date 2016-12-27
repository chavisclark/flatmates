import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUser, onEntryChange } from '../actions/users';
import ProfileEdit from '../components/ProfileEdit';
// import multirange from 'helpers/multirange.js';

class ProfileEditContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        currentSettingsView: 'profile',
        loading: true
      }
    }
  
    componentDidMount() {
      const {fetchUser} = this.props;
      fetchUser().then(function(user) {
        if (user)
          this.setState({ loading: false })
      }.bind(this));
    }

    render() {
      return (
          <ProfileEdit 
            viewProfileEdit={this.props.viewProfileEdit} 
            onEntryChange={this.props.onEntryChange} /> 
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {fetchUser, onEntryChange})(ProfileEditContainer);
