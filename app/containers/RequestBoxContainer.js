import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createOuting } from '../actions/outings';
import RequestBox from '../components/RequestBox';

class RequestBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(data) {
    const { createOuting } = this.props;
    data.outingLocation = this.props.currentLocation;
    createOuting({ data });
  }

  render() {
    return (
        <RequestBox handleOnSubmit={this.handleOnSubmit} />
    );
  }
}


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, { createOuting })(RequestBoxContainer);

