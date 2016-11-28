import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchFlats } from 'actions/flats';
import CitySelect from '../components/CitySelect';
import Button_Search from '../components/Button_Search';
import GoogleMapsWrapper from '../components/GoogleMapsWrapper';
import ReactDates from 'react-dates';
import uuid from 'uuid';
const ReactDatesPicker = ReactDates.SingleDatePicker;

class CitySearchContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        focused: false,
        date: null
      };
      this.handleSearch     = this.handleSearch.bind(this);
      this.onDateChange    = this.onDateChange.bind(this);
      this.onFocusChange    = this.onFocusChange.bind(this);
    }
  
    onDateChange(date) {
      this.setState({ date });
    }

    onFocusChange({focused}) {
      this.setState({ focused });
    }

    handleSearch() {
      const { fetchFlats } =  this.props; 
      let address = this.props.state.stay.city;
      var day = !this.state.date ? '' : this.state.date._d;
      
      let reservation = {day, address};

      if (this.props.state.stay.city) 
        fetchFlats(reservation);         
    }

    componentWillMount() {

    }


    render() {
      const { focused, date } = this.state;
      const init = () => {this.handleSearch()} 
      return (
        <div className='container'>
          <GoogleMapsWrapper>
            <CitySelect setLocation={this.props.setLocation} />
          </GoogleMapsWrapper>
          <ReactDatesPicker 
            {...this.props}
            id="date_input"
            numberOfMonths={1}
            placeholder="When"
            orientation={"vertical"}
            withFullScreenPortal={true}
            showClearDates={true}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focused={focused}
            date={date} />
            <Button_Search search={init} />
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
