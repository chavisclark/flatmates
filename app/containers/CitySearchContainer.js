import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchFlats } from 'actions/flats';
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
      const { fetchFlats } =  this.props; 
      let address = this.props.state.stay.city;
      var from = !this.state.startDate ? '' : this.state.startDate._d;
      var to = !this.state.endDate ? '' : this.state.endDate._d;
      
      let reservation = {from, to, address};
      console.log('HEY YA')
      if (this.state.endDate && this.props.state.stay.city) { 
        fetchFlats(reservation);         
      }
        return;
    }

    componentWillMount() {

    }


    render() {
      const { focusedInput, startDate, endDate } = this.state;
      const init = () => {this.handleSearch()} 
      
      return (
        <div className='container'>
          <GoogleMapsWrapper>
            <CitySelect setLocation={this.props.setLocation} />
          </GoogleMapsWrapper>
          <ReactDatesPicker 
            {...this.props}
            startDatePlaceholderText={"Move In"}
            endDatePlaceholderText={"Move Out"}
            orientation={"vertical"}
            withFullScreenPortal={true}
            showClearDates={true}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate} />
            <Button search={init} />
        </div>
      );      
    }
};


function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {fetchFlats})(CitySearchContainer);
