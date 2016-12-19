import React, { PropTypes, Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import dynamics from 'dynamics.js';
import { logOut } from '../../app/actions/users';
import { showNewRequest } from '../../app/actions/outings';
import ActionBox from '../../app/components/ActionBox';

describe('<ActionBox />', () => {

  it('should exists', () => {
    const wrapper = shallow(<ActionBox />)
    expect(wrapper).toBeDefined();
  });
});