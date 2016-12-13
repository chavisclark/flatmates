import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchUser } from 'actions/users';
import SettingsBox from '../components/SettingsBox';

class SettingsBoxContainer extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount() {
      const {fetchUser} = this.props;
      fetchUser();
    }

    render() {
      const {user} = this.props.state;
      return (
        <SettingsBox user={user.info.email} viewRequest={this.props.viewRequest} viewSettings={this.props.viewSettings} />
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {fetchUser})(SettingsBoxContainer);
