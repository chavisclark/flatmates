import { renderComponent, expect } from '../../test_helper';
import TestUtils from 'react-addons-test-utils';
import AuthForm from '../../../app/components/Auth/AuthForm';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Auth/login.css';

const cx = classNames.bind(styles);

describe('AuthForm', () => {
  let component;

  beforeEach(()=> {
    const props = {TodaysOutings:[], TomorrowsOutings:[], AnyOutings:[]}
    component = renderComponent(AuthForm, props);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('login'));
  });

  it('has three headings', () => {
    expect(component.find('form')).to.exist;
  });
})