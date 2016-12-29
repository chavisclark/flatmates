import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { findUserOutings } from '../state/actions/outings';
import ActivityList from '../components/ActivityList';
import Activity from '../components/Activity';

class ActivityListContainer extends Component {
    constructor(props){
      super(props);
      this.handleOpenSingleActivity = this.handleOpenSingleActivity.bind(this);
      this.state = {
        singleView: false,
        currentActivity: {}
      }
    }

    componentDidMount() {
      const {findUserOutings} = this.props;
      findUserOutings();
    }
    
    handleOpenSingleActivity(outing) {
      this.setState({
        singleView: true,
        currentActivity: outing
      });
    }

    render() {
      const {outing} = this.props;
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
        <div>
          {this.state.singleView ? <Activity thisOuting={this.state.currentActivity} /> :
          <ActivityList TodaysOutings={outingsToday} 
            TomorrowsOutings={outingsTomorrow}
            AnyOutings={outingsAny}
            viewRequest={this.props.viewRequest} 
            viewSettings={this.props.viewSettings}
            openSingleActivity={this.handleOpenSingleActivity}/>
          }
        </div>
      );      
    }
};


function mapStateToProps(state) {
  return {
    outing: state.outing
  };
}

export default connect(mapStateToProps, {findUserOutings})(ActivityListContainer);
