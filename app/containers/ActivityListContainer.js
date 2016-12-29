import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { findUserOutings } from '../state/actions/outings';
import ActivityList from '../components/ActivityList';
import Activity from '../components/Activity';
import sports from '../images/sports.svg';
import outdoors from '../images/outdoors.svg';
import nightlife from '../images/nightlife.svg';
import casual from '../images/casual.svg';

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
      const self = this;

      function sortCategoryIcon() {
        return self.selectIcon(outing)        
      };

      outing.icon = sortCategoryIcon();

      self.setState({
        singleView: true,
        currentActivity: outing
      });
    }

    selectIcon(outing) {
      if (this.handleSports(outing))
        return sports;
      if (this.handleOutdoors(outing))
        return outdoors;
      if (this.handleNightlife(outing))
        return nightlife;
      if (this.handleCasual(outing))
        return casual;
    }

    handleSports(outing) {
      return outing.category === 'sports';
    }

    handleOutdoors(outing) {
      return outing.category === 'outdoors';
    }

    handleNightlife(outing) {
      return outing.category === 'nightlife';
    }

    handleCasual(outing) {
      return outing.category === 'casual';
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
