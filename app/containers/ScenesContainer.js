import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting, findUserOutings } from '../actions/outings';
import Scenes from '../components/Scenes';
import ActionBoxContainer from 'containers/ActionBoxContainer';

class ScenesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleExpire = this.handleExpire.bind(this);
    this.handleViewActivities = this.handleViewActivities.bind(this);
    this.handleViewRequest = this.handleViewRequest.bind(this);
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

  render() {
    const { outing } = this.props.state;
    return (
      <div>
        { outing.showRequest ? 
          <Scenes handleOnSubmit={this.handleOnSubmit}
            OnExpire={this.handleExpire}
            closePopup={this.handleClosePopup}
            openPopup={this.handleOpenPopup}
            isOpen={this.state.isPopupOpen}
            viewActivities={this.handleViewActivities}
            viewRequest={this.handleViewRequest}
            currentScene={this.state.currentScene} /> :
          <ActionBoxContainer currentLocation={this.props.currentLocation} />
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

export default connect(mapStateToProps, { createOuting, findUserOutings })(ScenesContainer);

