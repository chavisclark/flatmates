import { renderComponent, expect } from '../../test_helper';
import SettingsBox from '../../../app/components/SettingsBox';
import classNames from 'classnames/bind';
import styles from '../../../app/components/SettingsBox/settings.css';

const cx = classNames.bind(styles);

describe('SettingsBox', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(SettingsBox);
  });

  it('has a correct class', () => {
    expect(component).to.have.class('sub-nav');
  });
});