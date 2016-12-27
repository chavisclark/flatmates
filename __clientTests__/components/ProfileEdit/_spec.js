import { renderComponent, expect } from '../../test_helper';
import ProfileEdit from '../../../app/components/ProfileEdit';
import classNames from 'classnames/bind';
import styles from '../../../app/components/ProfileEdit/profile-edit.css';

const cx = classNames.bind(styles);

describe('ProfileEdit', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(ProfileEdit);
  });

  it('has a correct class', () => {
    expect(component.find('div:nth-child(1)')).to.have.class('container');
  });
});