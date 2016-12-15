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
      this.handleViewProfileEdit = this.handleViewProfileEdit.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.handleLogOut = this.handleLogOut.bind(this);
      this.renderViews = this.renderViews.bind(this);
    }
  
    handleViewProfileEdit(edit) {
      this.setState({
        currentSettingsView: edit
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

     handleOptionChange(event) {
      this.setState({
        currentSettingsView: event.target.value
      });
    }

    renderViews() {
      const { currentSettingsView, user } = this.state;
      if (currentSettingsView == 'controls')
        return ( <ControlPanel /> )
      if (currentSettingsView == 'profile')
        return ( <Profile viewProfileEdit={this.handleViewProfileEdit} /> )

    }

    render() {
      const {info} = this.props.state.user;
      const {currentSettingsView} = this.state;
      return (
        <div>
          { currentSettingsView == 'profile-edit' ? <ProfileEdit viewProfileEdit={this.handleViewProfileEdit} onEntryChange={this.props.onEntryChange} /> 
          : <SettingsBox logOut={this.handleLogOut}
              viewRequest={this.props.viewRequest} 
              viewActivities={this.props.viewActivities} 
              viewSettings={this.props.viewSettings}
              handleOnChange={this.handleOptionChange}
              currentSettingsView={this.state.currentSettingsView}>
              {this.renderViews()}
            </SettingsBox>
        }
        </div>
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {fetchUser, onEntryChange, logOut})(SettingsBoxContainer);
