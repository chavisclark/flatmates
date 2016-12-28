import { renderComponent, expect } from '../test_helper';
import App from '../../app/containers/App';

describe('App', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(App);
  });

  it('exists', () => {
    expect(component).to.exist;
  });
})