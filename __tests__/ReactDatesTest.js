import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReactDatesPicker from '../app/components/ReactDatesPicker';
import ReactDates from 'react-dates';
const DatePicker = ReactDates.DateRangePicker;

describe('<ReactDatesPicker />', () => {

  it('should exists', () => {
    const wrapper = mount(
      <ReactDatesPicker />
    )
    expect(wrapper).toBeDefined();
  });

  it('should contain DatePicker', ()=>{
    const wrapper = mount(
      <DatePicker />
    )
    expect(wrapper).toBeDefined();
  })

});