import { renderComponent, expect } from '../../test_helper';
import TestUtils from 'react-addons-test-utils';
import ActionBox from '../../../app/components/ActionBox';
import classNames from 'classnames/bind';
import styles from '../../../app/components/ActionBox/actionbox.css';

const cx = classNames.bind(styles);

describe('ActionBox', () => {
  let component;
  let thisClass;

  beforeEach(()=> {
    component = renderComponent(ActionBox);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('home_actions'));
  });

  it('has two buttons', () => {
    expect(component.find('button')).to.exist;
  });

  // describe(' entering some text', () => {
  //   beforeEach(() => {
  //     component.find('textarea').simulate('change', 'new comment');
  //   });

  //   it('shows text that in textarea', () => {
  //     expect(component.find('textarea')).to.have.value('new comment')
  //   });

  //   it('when submited, clears the input', () => {
  //     component.simulate('submit');
  //     expect(component.find('textarea')).to.have.value('');
  //   });
  // })
})