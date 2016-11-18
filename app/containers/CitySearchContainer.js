import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import CitySelect from '../components/CitySelect';
import GoogleMapsWrapper from '../components/GoogleMapsWrapper';
import ReactDates from 'react-dates';
import omitBy from 'lodash/omitBy';
import isEmpty from 'lodash/isEmpty';
import uuid from 'uuid';
const ReactDatesPicker = ReactDates.DateRangePicker;

class CitySearchContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        focusedInput: null,
        startDate: null,
        endDate: null,
        startReservation: false
      };
      this.handleSearch      = this.handleSearch.bind(this)
      this.onDatesChange    = this.onDatesChange.bind(this);
      this.onFocusChange    = this.onFocusChange.bind(this);
    }
  
    onDatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
      this.setState({ focusedInput });
    }

    handleSearch(address) {
      return {
        init: () => {
          var from = !this.state.startDate ? '' : this.state.startDate._d;
          var to = !this.state.endDate ? '' : this.state.endDate._d;
          let reservation = {from, to, address};

          if (this.state.endDate && address) {
            //Create search action => search(reservation)
            console.log(reservation)
          }
        }         
      }
    }


    render() {
      const { focusedInput, startDate, endDate } = this.state;
      return (
        <div >
          <ReactDatesPicker 
            {...this.props}
            startDatePlaceholderText={"Check In"}
            endDatePlaceholderText={"Check Out"}
            orientation={"vertical"}
            withFullScreenPortal={true}
            showClearDates={true}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate} />
          <GoogleMapsWrapper>
            <CitySelect setLocation={this.props.setLocation} startSearch={this.handleSearch} />
          </GoogleMapsWrapper>
        </div>
      );      
    }
};


export default CitySearchContainer;
