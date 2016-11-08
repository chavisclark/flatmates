import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Navigation from '../app/components/Navigation';

describe('<Navigation />', () => {

  it('should exists', () => {
    const wrapper = mount(
      <Navigation />
    )
    expect(wrapper).toBeDefined();
  });

});