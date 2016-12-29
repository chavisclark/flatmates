import { renderComponent, expect } from '../../test_helper';
import ActivityIcon from '../../../app/components/ActivityIcon';
import classNames from 'classnames/bind';
import styles from '../../../app/components/ActivityIcon/icon.css';

const cx = classNames.bind(styles);

describe('ActivityIcon', () => {
  let component;
  let props;

  beforeEach(()=> {
    props = {thisOuting: {}}
    component = renderComponent(ActivityIcon, props);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('activity_icon'));
  });

});