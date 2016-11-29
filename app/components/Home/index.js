import React, {Component} from 'react'
import NavigationContainer from 'containers/NavigationContainer'
import CitySearchContainer from 'containers/CitySearchContainer'
import classNames from 'classnames/bind'
import styles from 'css/main'

const cx = classNames.bind(styles);

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className={cx("container")}>
        <NavigationContainer />
          <img src='https://images.unsplash.com/photo-1467504057324-4c38f39ff87c?dpr=1&auto=format&fit=crop&w=1500&h=NaN&q=80&cs=tinysrgb&crop='/>
          <h1 className={cx("banner")}>Find a friend. Share a flat.</h1>
          <div className={cx("action-container")}>
            <br/>
            <CitySearchContainer className={cx("tripRequester")} /> 
          </div>
        </div>
      </div>

    )
  }
}