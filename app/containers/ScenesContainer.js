import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting, findUserOutings } from '../state/actions/outings';
import { logOut } from '../state/actions/users';
import MainWrapper from '../components/MainWrapper';
import RequestBox from '../components/RequestBox';
import SettingsBoxContainer from './SettingsBoxContainer';
import Activity from '../components/Activity';
import Loading from '../components/Loading';
import ActivityListContainer from './ActivityListContainer';

class ScenesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleExpire = this.handleExpire.bind(this);
    this.handleViewScene = this.handleViewScene.bind(this);
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

  handleViewScene(scene) {
    this.setState({
      currentScene: scene
    })
  }

  handleOnSubmit(data) {
      return this.setState({ isPopupOpen: true, formData: data})
  }

  submitForm(n) {
    const { createOuting } = this.props;
    let data = this.state.formData;
    this.setState({
      currentScene: 'single-activity'
    })
    return createOuting(data, n);
  }

  renderScene() {
    const { currentScene } = this.state;
    if (currentScene == 'request') 
      return (
        <MainWrapper currentScene={currentScene} viewScene={this.handleViewScene}>
          <RequestBox handleOnSubmit={this.handleOnSubmit}
              OnExpire={this.handleExpire}
              closePopup={this.handleClosePopup}
              openPopup={this.handleOpenPopup}
              isOpen={this.state.isPopupOpen} />                
          </MainWrapper> 

      );

    if (currentScene == 'settings')
      return (
        <MainWrapper currentScene={currentScene} viewScene={this.handleViewScene}>
            <SettingsBoxContainer />               
          </MainWrapper>

      )

    if (currentScene == 'activities')
      return (
          <MainWrapper currentScene={currentScene} viewScene={this.handleViewScene}>
              <ActivityListContainer />
            </MainWrapper>
      )

    if (currentScene == 'single-activity') 
      return (
        <div>
          { this.props.outing.current ? <Activity closeScene={() => this.handleViewScene('request')} thisOuting={this.props.outing.current} />
            : <Loading />
          }
        </div>
      )
  }

  render() {
    return (
      <div>
        {this.renderScene()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    outing: state.outing
  };
}

export default connect(mapStateToProps, { createOuting, findUserOutings, logOut })(ScenesContainer);

