import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavigationContainer from 'containers/NavigationContainer';
import ActionBoxContainer from 'containers/ActionBoxContainer';
import RequestBox from 'components/RequestBox';
import Footer from 'components/Footer';
import classNames from 'classnames/bind';
import styles from './home';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const authenticated = this.props.user.authenticated;

    return (
      <div className={cx("container")}>
        {authenticated ? (<RequestBox/>) : (
          <span>
            <NavigationContainer />
            <img src='https://images.unsplash.com/photo-1467504057324-4c38f39ff87c?dpr=1&auto=format&fit=crop&w=1500&h=NaN&q=80&cs=tinysrgb&crop='/>
            <h1 className={cx("banner")}>Find a local. Experience the city.</h1>
            <ActionBoxContainer />
            <Footer />
          </span>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, {null})(Home);