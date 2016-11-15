import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CitySelect from '../app/components/CitySelect';

describe('<CitySelect />', () => {

  it('should exists', () => {
    const wrapper = mount(
      <CitySelect />
    )
    expect(wrapper).toBeDefined();
  });
});