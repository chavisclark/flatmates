import {renderComponent, expect} from '../../test_helper';
import Navigation from '../../../app/components/Navigation';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Navigation/navigation.css';

const cx = classNames.bind(styles);

describe('Navigation', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(Navigation);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has a correct class', () => {
      expect(component).to.have.class(cx('navigation'));
  });
});