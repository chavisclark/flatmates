import { renderComponent, expect } from '../../../test_helper';
import AuthForm from '../../../../app/components/Auth/AuthForm';
import classNames from 'classnames/bind';
import styles from '../../../../app/components/Auth/login.css';

const cx = classNames.bind(styles);

describe('AuthForm', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(AuthForm);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('login'));
  });

  it('has a form', () => {
    expect(component.find('form')).to.exist;
  });
});