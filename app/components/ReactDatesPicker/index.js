import React, {Component} from 'react';
import classNames from 'classnames/bind'
import ReactDates from 'react-dates';
import styles from './react-dates.css';
const DatePicker = ReactDates.DateRangePicker;

const cx = classNames.bind(styles)
export default class DateRangePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleDates() {
    if (this.state.endDate) {
      var from = this.state.startDate._d;
      var to = this.state.endDate._d;
      this.props.containerDateValues(from, to)
    }
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div>
        <DatePicker
          {...this.props}
          orientation={"vertical"}
          withFullScreenPortal={true}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          showClearDates={true}
        />
        <span className={cx('trav-btn')} onClick={this.handleDates.bind(this)}><span>Submit</span></span>
      </div>
    );
  }
}