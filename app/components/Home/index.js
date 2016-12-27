import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../app/actions/users';
import NavigationContainer from '../../../app/containers/NavigationContainer';
import ActionBoxContainer from '../../../app/containers/ActionBoxContainer';
import ScenesContainer from '../../../app/containers/ScenesContainer';
import Footer from '../../../app/components/Footer';
import classNames from 'classnames/bind';
import styles from './home';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocation: [null],
      initialRequest: true
    }
  }

  componentDidMount() {
    const vm = this;
    const { fetchUser } = this.props;
    function success (position) {
      let lat = position.coords.latitude,
          lng = position.coords.longitude;
          
          console.info('Your coordinates are ' + lat + ', '+ lng)
          vm.setState({currentLocation: [lat, lng]})
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    navigator.geolocation.getCurrentPosition(success, error)

    fetchUser();

  }

  render() {
    const authenticated = this.props.user.authenticated;

    return (
      <div className={cx("home_container")}>
        {authenticated ? (<ScenesContainer currentLocation={this.state.currentLocation}/>) : (
          <span>
            <NavigationContainer />
            <img src='https://images.unsplash.com/photo-1467504057324-4c38f39ff87c?dpr=1&auto=format&fit=crop&w=1500&h=NaN&q=80&cs=tinysrgb&crop='/>
            <h1 className={cx("banner")}>Find a local. Experience the city.</h1>
            <ActionBoxContainer currentLocation={this.state.currentLocation} />
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

export default connect(mapStateToProps, actions)(Home);