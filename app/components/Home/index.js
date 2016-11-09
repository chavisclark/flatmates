import React, {Component} from 'react'
import NavigationContainer from 'containers/NavigationContainer'
import CitySelect from '../CitySelect'
import ReactDatesPicker from '../ReactDatesPicker'
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
            <h1 className={cx("header")}>Where to?</h1>
            <br/>
            <div className={cx("tripRequester")}>
              <CitySelect /> 
              <ReactDatesPicker />
            </div>
          </div>
        </div>
      </div>

    )
  }
}