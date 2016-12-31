import { renderComponent, expect } from '../../test_helper';
import Activity from '../../../app/components/Activity';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Activity/activity.css';

const cx = classNames.bind(styles);

describe('Activity', () => {
  let component;
  let props;

  beforeEach(()=> {
    props = {thisOuting: {text: "Sample"}}
    component = renderComponent(Activity, props);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('activity_container'));
  });

  it('has a primary activity icon', () => {
    expect(component.find('div')).to.have.class(cx('activity_icon'));
  });
  it('has an activity title', () => {
    expect(component.find('div:nth-child(3)')).to.have.class(cx('activity_title'));
  });
  it('has a participant list', () => {
    expect(component.find('div:nth-child(4)')).to.have.class(cx('participant_list'));
  });
});