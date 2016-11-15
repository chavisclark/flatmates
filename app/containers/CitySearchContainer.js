import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';
import CitySelect from 'components/CitySelect';
import DateRangeWrapper from 'components/DateRangeWrapper';
import ReactDates from 'react-dates';
import omitBy from 'lodash/omitBy';
import isEmpty from 'lodash/isEmpty';
import uuid from 'uuid';
const ReactDatesPicker = ReactDates.DateRangePicker;

class CitySearchContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
        selected: '',
        focusedInput: null,
        startDate: null,
        endDate: null,
        startReservation: false
      };
      this.handleCitySelect = this.handleCitySelect.bind(this);
      this.handleDates      = this.handleDates.bind(this)
      this.onDatesChange    = this.onDatesChange.bind(this);
      this.onFocusChange    = this.onFocusChange.bind(this);
    }

    componentDidMount(){
      this.setState({
        selected: {"id": "none", "city": "Select a city"}
      })
    }

    handleCitySelect(event) {
      event.preventDefault();
      this.setState({
        selected: event.target.value
      })  
    }
  
    onDatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
      this.setState({ focusedInput });
    }
  
    handleReservationPlans(start, end) {
      const stayId = uuid.v4();
      let stateObj = omitBy(this.state, isEmpty);
      if (start && end) {
        let stay = { id: stayId, start: start, end: end };

       ///Update State here

        this.setState({
          startReservation: true
        })
        console.log(stay)
        console.log(this.state.selected)
      ///Save State here      
      }
    }

    handleDates() {
      if (this.state.endDate) {
        var from = this.state.startDate._d;
        var to = this.state.endDate._d;
        this.handleReservationPlans(from, to)
      }
    }

    handleSearch() {
      ///Send action and hit API (not yet created)
    }

    render() {
      const { focusedInput, startDate, endDate } = this.state;
      let places = [
                    {
                      "id": 1235234,
                      "name": "Ap #621-9696 Nulla Rd.",
                      "city": "Airdrie",
                      "price": 2822,
                      "rooms": 4,
                      "beds": 5,
                      "capacity": 4,
                      "description": "at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
                      "image": "https://source.unsplash.com/uuApNXxgcRM/600x400"
                    },
                    {
                      "id": 1235238,
                      "name": "Ap #815-1516 Elementum Road",
                      "city": "Robelmont",
                      "price": 4206,
                      "rooms": 1,
                      "beds": 6,
                      "capacity": 6,
                      "description": "eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
                      "image": "https://source.unsplash.com/zuXlkbsfU9Q/600x400"
                    }
                  ]
      let options = places.map((p, index)=> <option key={index} value={p.id} className="something">{p.city}</option>);
      let selected = this.state.selected || places.filter((s)=> s.id == this.state.selected);
      return (
        <div className={this.props.className}>
          <CitySelect handleCitySelect={this.handleCitySelect}
            selectedCity={selected.city}
            selectedId={selected.id}
            options={options} />
          <DateRangeWrapper handleDates={this.handleDates}>
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
              endDate={endDate}/>
          </DateRangeWrapper>
        </div>
      );      
    }
};


export default CitySearchContainer;
