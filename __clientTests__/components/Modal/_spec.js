import { renderComponent, expect } from '../../test_helper';
import Modal from '../../../app/components/Modal';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Modal/modal.css';

const cx = classNames.bind(styles);

describe('Modal', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(Modal);
  });

  it('has a correct class', () => {
      expect(component).to.have.class(cx('popupContainer'));
  });
});