import { renderComponent, expect } from '../../test_helper';
import Profile from '../../../app/components/Profile';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Profile/profile.css';

const cx = classNames.bind(styles);

describe('Profile', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(Profile);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('container'));
  });
});