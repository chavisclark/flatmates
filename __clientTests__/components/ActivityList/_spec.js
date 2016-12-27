import { renderComponent, expect } from '../../test_helper';
import TestUtils from 'react-addons-test-utils';
import ActivityList from '../../../app/components/ActivityList';
import classNames from 'classnames/bind';
import styles from '../../../app/components/ActivityList/activitylist.css';

const cx = classNames.bind(styles);

describe('ActivityList', () => {
  let component;

  beforeEach(()=> {
    const props = {TodaysOutings:[], TomorrowsOutings:[], AnyOutings:[]}
    component = renderComponent(ActivityList, props);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('container'));
  });

  it('has three headings', () => {
    expect(component.find('h1')).to.exist;
    expect(component.find('h1:nth-child(2)')).to.exist;
    expect(component.find('h1:nth-child(3)')).to.exist;
  });
})