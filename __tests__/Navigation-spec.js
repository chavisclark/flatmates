import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Navigation from '../app/components/Navigation';
import Modal from '../app/components/Modal';

describe('<Navigation />', () => {

  it('should exists', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper).toBeDefined();
  });
});