import { renderComponent, expect } from '../test_helper';
import ActionBox from '../../app/components/ActionBox';
import AuthContainer from '../../app/containers/AuthContainer';
import Modal from '../../app/components/Modal';
import ActionBoxContainer from '../../app/containers/ActionBoxContainer';

describe('ActionBoxContainer', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(ActionBoxContainer);
  });

  it('exists', () => {
    expect(component).to.exist;
  });
})