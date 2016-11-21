import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CitySelect from '../components/CitySelect';
import Button from '../components/Button';
import GoogleMapsWrapper from '../components/GoogleMapsWrapper';
import ReactDates from 'react-dates';
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
      this.handleSearch     = this.handleSearch.bind(this)
      this.onDatesChange    = this.onDatesChange.bind(this);
      this.onFocusChange    = this.onFocusChange.bind(this);
    }
  
    onDatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
      this.setState({ focusedInput });
    }

    handleSearch() {
      let address = this.props.state.stay.city;
      return {
        init: () => {
          var from = !this.state.startDate ? '' : this.state.startDate._d;
          var to = !this.state.endDate ? '' : this.state.endDate._d;
          let reservation = {from, to, address};

          //Create search action => search(reservation)
          console.log(reservation)

        }         
      }
    }


    render() {
      const { focusedInput, startDate, endDate } = this.state;
      return (
        <div className='container'>
          <GoogleMapsWrapper>
            <CitySelect setLocation={this.props.setLocation} />
          </GoogleMapsWrapper>
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
            {
              this.state.endDate && this.props.state.stay.city ? this.handleSearch().init() 
              : ''
            }
        </div>
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {})(CitySearchContainer);
