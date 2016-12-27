import {renderComponent, expect} from '../../../test_helper';
import LoggedInNav from '../../../../app/components/Navigation/LoggedInNav';
import classNames from 'classnames/bind';
import styles from '../../../../app/components/Navigation/navigation.css';

const cx = classNames.bind(styles);

describe('LoggedInNav', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(LoggedInNav);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has a correct class', () => {
      expect(component).to.have.class(cx('navigation-auth'));
  });
});