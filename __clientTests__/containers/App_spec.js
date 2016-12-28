import {renderComponent, expect} from '../test_helper';

describe('<App />', () => {

  it('should exist', () => {
    const component = renderComponent('App')
    expect(component).to.exist;
  });
});