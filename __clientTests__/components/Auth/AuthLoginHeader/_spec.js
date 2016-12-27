import { renderComponent, expect } from '../../../test_helper';
import AuthLoginHeader from '../../../../app/components/Auth/AuthLoginHeader';
import classNames from 'classnames/bind';
import styles from '../../../../app/components/Auth/login.css';

const cx = classNames.bind(styles);

describe('AuthLoginHeader', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(AuthLoginHeader);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('header'));
  });

  it('has one heading', () => {
    expect(component.find('h1')).to.exist;
  });
});