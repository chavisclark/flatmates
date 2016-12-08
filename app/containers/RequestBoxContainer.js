import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createOuting } from '../actions/outings';
import RequestBox from '../components/RequestBox';

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
    document.getElementById('quest').dispatchEvent(new Event("submit"));
    document.getElementById('quest').reset();
  }

  handleTomorrow() {
    this.setState({
      expire: 2,
      isPopupOpen: false
    })
    document.getElementById('quest').dispatchEvent(new Event("submit"));
  }

  handleAny() {
    this.setState({
      expire: Infinity,
      isPopupOpen: false
    })
    document.getElementById('quest').dispatchEvent(new Event("submit"));
  }

  handleOnSubmit(data) {
    const { createOuting } = this.props;
    createOuting({ data });
  }

  render() {
    return (
      <div>
        <RequestBox handleOnSubmit={this.handleOnSubmit}
          expire={this.state.expire}
          OnToday={this.handleToday}
          OnTomorrow={this.handleTomorrow}
          OnAny={this.handleAny}
          closePopup={this.handleClosePopup}
          openPopup={this.handleOpenPopup}
          isOpen={this.state.isPopupOpen} />
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

