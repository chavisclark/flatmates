import { renderComponent, expect } from '../../test_helper';
import TestUtils from 'react-addons-test-utils';
import ActionBox from '../../../app/components/ActionBox';
import classNames from 'classnames/bind';
import styles from '../../../app/components/ActionBox/actionbox.css';

const cx = classNames.bind(styles);

describe('ActionBox', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(ActionBox);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('home_actions'));
  });

  it('has two buttons', () => {
    expect(component.find('button')).to.exist;
    expect(component.find('button:nth-child(2)')).to.exist;
  });
})