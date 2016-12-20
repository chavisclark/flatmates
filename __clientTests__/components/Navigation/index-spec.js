import {renderComponent, expect} from '../../test_helper';

describe('<Navigation />', () => {

  it('should exist', () => {
    const component = renderComponent('Navigation')
    expect(component).to.exist;
  });
});