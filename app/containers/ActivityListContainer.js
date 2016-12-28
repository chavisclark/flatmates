import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { findUserOutings } from '../state/actions/outings';
import ActivityList from '../components/ActivityList';

class ActivityListContainer extends Component {
    constructor(props){
      super(props);
      this.handleOpenSingleActivity = this.handleOpenSingleActivity.bind(this);
    }

    componentDidMount() {
      const {findUserOutings} = this.props;
      findUserOutings();
    }
    handleOpenSingleActivity(outing) {
      console.log(outing)
    }

    render() {
      const {outing} = this.props.state;
      var todaysDate = new Date();
      var endOfToday = new Date(new Date().setHours(24,0,0,0));

      const outingsToday = outing.outings.filter((outing) => {
        var expirationDate = new Date(outing.expire)
        return expirationDate > todaysDate && expirationDate <= endOfToday
      })

      const outingsTomorrow = outing.outings.filter((outing) => {
        var expirationDate = new Date(outing.expire)
        return expirationDate > todaysDate && expirationDate > endOfToday
      })

      const outingsAny = outing.outings.filter((outing) => !outing.expire)

      return (
        <ActivityList TodaysOutings={outingsToday} 
          TomorrowsOutings={outingsTomorrow}
          AnyOutings={outingsAny}
          viewRequest={this.props.viewRequest} 
          viewSettings={this.props.viewSettings}
          openSingleActivity={this.handleOpenSingleActivity}/>
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {findUserOutings})(ActivityListContainer);
