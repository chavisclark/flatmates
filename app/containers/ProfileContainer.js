import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUser, onEntryChange } from '../state/actions/users';
import Profile from '../components/Profile';
// import multirange from 'helpers/multirange.js';

class ProfileContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
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
          <Profile 
            viewProfileEdit={this.props.viewProfileEdit} 
            onEntryChange={this.props.onEntryChange} /> 
      );      
    }
};


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {fetchUser, onEntryChange})(ProfileContainer);
