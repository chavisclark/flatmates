import { renderComponent, expect } from '../../test_helper';
import Home from '../../../app/components/Home';
import ScenesContainer from '../../../app/containers/ScenesContainer';
import NavigationContainer from '../../../app/containers/NavigationContainer';
import ActionBoxContainer from '../../../app/containers/ActionBoxContainer';
import Footer from '../../../app/components/Footer';
import * as actions from '../../../app/actions/users';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Home/home.css';

const cx = classNames.bind(styles);

describe('Home', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(Home);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('home_container'));
  });
});