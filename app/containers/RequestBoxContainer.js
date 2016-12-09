import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting } from '../actions/outings';
import RequestBox from '../components/RequestBox';
import ActionBoxContainer from 'containers/ActionBoxContainer';

class RequestBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOpenPopup = this.handleOpenPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
    this.handleToday = this.handleToday.bind(this);
    this.handleTomorrow = this.handleTomorrow.bind(this);
    this.handleAny = this.handleAny.bind(this);
    this.state = {
      isPopupOpen: false,
      expire: 0
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
    })
    return this.submitForm();
  }

  handleTomorrow() {
    this.setState({
      expire: 2,
      isPopupOpen: false
    })
    return this.submitForm();
  }

  handleAny() {
    this.setState({
      expire: Infinity,
      isPopupOpen: false
    })
    return this.submitForm();
  }

  handleOnSubmit(data) {
    const { createOuting } = this.props;
    if (data.text)
      return createOuting({ data });
    if (!data.text)
      return alert('Hey you forgot to add your activity, silly rabbit!');
    
  }

  submitForm () {
    return document.getElementById('quest').dispatchEvent(new Event("submit"));
  }

  render() {
    const { outing } = this.props.state;
    const { beginCreate } = this.props;
    return (
      <div>
        { outing.showRequest ? 
          <RequestBox handleOnSubmit={this.handleOnSubmit}
            expire={this.state.expire}
            OnToday={this.handleToday}
            OnTomorrow={this.handleTomorrow}
            OnAny={this.handleAny}
            closePopup={this.handleClosePopup}
            openPopup={this.handleOpenPopup}
            isOpen={this.state.isPopupOpen} /> :
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

export default connect(mapStateToProps, { createOuting })(RequestBoxContainer);

