import { renderComponent, expect } from '../../test_helper';
import Footer from '../../../app/components/Footer';
import classNames from 'classnames/bind';
import styles from '../../../app/components/Footer/footer.css';

const cx = classNames.bind(styles);

describe('Footer', () => {
  let component;

  beforeEach(()=> {
    component = renderComponent(Footer);
  });

  it('has a correct class', () => {
    expect(component).to.have.class(cx('footer'));
  });
});