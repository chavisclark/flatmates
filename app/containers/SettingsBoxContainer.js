import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUser, onEntryChange, logOut } from 'actions/users';
import SettingsBox from '../components/SettingsBox';
import ControlPanel from '../components/ControlPanel';
import Profile from '../components/Profile';
import ProfileEdit from '../components/ProfileEdit';

class SettingsBoxContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        currentSettingsView: 'profile'
      }
      this.handleViewControlPanel = this.handleViewControlPanel.bind(this);
      this.handleViewProfile = this.handleViewProfile.bind(this);
      this.handleViewProfileEdit = this.handleViewProfileEdit.bind(this);
      this.handleLogOut = this.handleLogOut.bind(this);
      this.renderViews = this.renderViews.bind(this);
    }
  
    handleViewControlPanel() {
      this.setState({
        currentSettingsView: 'controls'
      })
    }

    handleViewProfile() {
      this.setState({
        currentSettingsView: 'profile'
      })
    }

    handleViewProfileEdit() {
      this.setState({
        currentSettingsView: 'profile-edit'
      })
    }

    componentDidMount() {
      const {fetchUser} = this.props;
      fetchUser();
    }

    handleLogOut() {
      const { logOut } = this.props;
        logOut({null});
    }

    renderViews() {
      const { currentSettingsView, user } = this.state;
      const { email } = this.props.state.user.info;
      if (currentSettingsView == 'controls')
        return ( <ControlPanel /> )
      if (currentSettingsView == 'profile')
        return ( <Profile /> )
      if (currentSettingsView == 'profile-edit')
        return ( <ProfileEdit onEntryChange={this.props.onEntryChange} user={email}/> )
    }

    render() {
      const {info} = this.props.state.user;
      return (
        <SettingsBox logOut={this.handleLogOut}
          viewRequest={this.props.viewRequest} 
          viewActivities={this.props.viewActivities} 
          viewSettings={this.props.viewSettings}
          viewControlPanel={this.handleViewControlPanel} 
          viewProfile={this.handleViewProfile} 
          viewProfileEdit={this.handleViewProfileEdit}>
          {this.renderViews()}
        </SettingsBox>
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {fetchUser, onEntryChange, logOut})(SettingsBoxContainer);
