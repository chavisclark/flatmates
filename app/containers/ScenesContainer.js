import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting, findUserOutings } from '../actions/outings';
import { logOut } from '../actions/users';
import MainWrapper from '../components/MainWrapper';
import RequestBox from '../components/RequestBox';
import SettingsBoxContainer from 'containers/SettingsBoxContainer';
import ActionBoxContainer from 'containers/ActionBoxContainer';
import ActivityListContainer from 'containers/ActivityListContainer';

class ScenesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleExpire = this.handleExpire.bind(this);
    this.handleViewActivities = this.handleViewActivities.bind(this);
    this.handleViewRequest = this.handleViewRequest.bind(this);
    this.handleViewSettings = this.handleViewSettings.bind(this);
    this.state = {
      isPopupOpen: false,
      currentScene: 'request'
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

  handleExpire(n) {
    this.setState({
      isPopupOpen: false
    });
    this.submitForm(n);
  }

  handleViewActivities() {
    this.setState({
      currentScene: 'activities'
    })
  }

  handleViewSettings() {
    this.setState({
      currentScene: 'settings'
    })
  }

  handleViewRequest() {
    this.setState({
      currentScene: 'request'
    })
  }

  handleOnSubmit(data) {
      return this.setState({ isPopupOpen: true, formData: data})
  }

  submitForm(n) {
    const { createOuting } = this.props;
    let data = this.state.formData;
    //Fix empty server response bug
    return createOuting(data, n);
  }

  renderScene() {
    const { currentScene } = this.state;
    if (currentScene == 'request') 
      return ( 
        <RequestBox handleOnSubmit={this.handleOnSubmit}
            OnExpire={this.handleExpire}
            closePopup={this.handleClosePopup}
            openPopup={this.handleOpenPopup}
            isOpen={this.state.isPopupOpen}
            viewActivities={this.handleViewActivities}
            viewSettings={this.handleViewSettings}
            viewRequest={this.handleViewRequest} /> 
      );

    if (currentScene == 'settings')
      return (<SettingsBoxContainer viewRequest={this.handleViewRequest} 
                scene={this.state.scene}
                viewSettings={this.handleViewSettings} 
                viewActivities={this.handleViewActivities} />
      )

    if (currentScene == 'activities')
      return (<ActivityListContainer  viewRequest={this.handleViewRequest} 
                viewSettings={this.handleViewSettings} 
                viewActivities={this.handleViewActivities} />)
  }

  render() {
    const { outing } = this.props.state;
    const { currentScene } = this.state;
    return (
      <div>
        { outing.showRequest ? 
          <MainWrapper currentScene={currentScene}
            viewSettings={this.handleViewSettings} 
            viewActivities={this.handleViewActivities} 
            viewRequest={this.handleViewRequest}>
              {this.renderScene()} 
            </MainWrapper> 
          : <ActionBoxContainer currentLocation={this.props.currentLocation} />
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, { createOuting, findUserOutings, logOut })(ScenesContainer);

