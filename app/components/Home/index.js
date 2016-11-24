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
        <NavigationContainer />
        <div className={cx("full-screen")}>
          <div>
            <h1 className={cx("header")}>Find an ip. Share the sum.</h1>
            <br/>
            <CitySearchContainer className={cx("tripRequester")} /> 
          </div>
        </div>
      </div>

    )
  }
}