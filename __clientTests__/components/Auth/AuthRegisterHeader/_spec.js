import { renderComponent, expect } from '../../../test_helper';
import AuthRegisterHeader from '../../../../app/components/Auth/AuthRegisterHeader';
import classNames from 'classnames/bind';
import styles from '../../../../app/components/Auth/login.css';

const cx = classNames.bind(styles);

describe('AuthRegisterHeader', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(AuthRegisterHeader);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('header'));
  });

  it('has one heading', () => {
    expect(component.find('h1')).to.exist;
  });
});