import { renderComponent, expect } from '../../test_helper';
import ControlPanel from '../../../app/components/ControlPanel';
import classNames from 'classnames/bind';
import styles from '../../../app/components/ControlPanel/control-panel.css';

const cx = classNames.bind(styles);

describe('ControlPanel', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(ControlPanel);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('container'));
  });
});