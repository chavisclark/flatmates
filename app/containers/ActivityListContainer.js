import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { findUserOutings } from 'actions/outings';
import ActivityList from '../components/ActivityList';

class ActivityListContainer extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount() {
      const {findUserOutings} = this.props;
      findUserOutings();
    }

    render() {
      return (
        <ActivityList activities={this.props.activities} viewRequest={this.props.viewRequest} />
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {findUserOutings})(ActivityListContainer);
