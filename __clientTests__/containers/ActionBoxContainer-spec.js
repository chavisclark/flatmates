import {renderComponent, expect} from '../test_helper';

describe('<ActionBoxContainer />', () => {

  it('should exist', () => {
    const component = renderComponent('ActionBoxContainer')
    expect(component).to.exist;
  });
});