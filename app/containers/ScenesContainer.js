import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting } from '../actions/outings';
import Scenes from '../components/Scenes';
import ActionBoxContainer from 'containers/ActionBoxContainer';

class ScenesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleToday = this.handleToday.bind(this);
    this.handleTomorrow = this.handleTomorrow.bind(this);
    this.handleAny = this.handleAny.bind(this);
    this.handleViewActivities = this.handleViewActivities.bind(this);
    this.handleViewRequest = this.handleViewRequest.bind(this);
    this.state = {
      isPopupOpen: false,
      expire: 0,
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

  handleToday() {
    this.setState({
      expire: 1,
      isPopupOpen: false
    });
    this.submitForm();
  }

  handleTomorrow() {
    this.setState({
      expire: 2,
      isPopupOpen: false
    });
    this.submitForm();
  }

  handleAny() {
    this.setState({
      expire: Infinity,
      isPopupOpen: false
    });
    this.submitForm();
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

  submitForm() {
    const { createOuting } = this.props;
    let data = this.state.formData;
    //Fix empty server response bug
    return createOuting({ data });
  }

  render() {
    const { outing } = this.props.state;
    return (
      <div>
        { outing.showRequest ? 
          <Scenes handleOnSubmit={this.handleOnSubmit}
            expire={this.state.expire}
            OnToday={this.handleToday}
            OnTomorrow={this.handleTomorrow}
            OnAny={this.handleAny}
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

export default connect(mapStateToProps, { createOuting })(ScenesContainer);

