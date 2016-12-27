import { renderComponent, expect } from '../../test_helper';
import RequestBox from '../../../app/components/RequestBox';
import classNames from 'classnames/bind';
import styles from '../../../app/components/RequestBox/requestbox.css';

const cx = classNames.bind(styles);

describe('RequestBox', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(RequestBox);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('container');
  });
});