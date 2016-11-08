import React, {Component} from 'react'
import Navigation from '../Navigation'
import CitySelect from '../CitySelect'
import ReactDatesPicker from '../ReactDatesPicker'
import classNames from 'classnames/bind'
import styles from 'css/main'

const cx = classNames.bind(styles);

export default class Home extends Component {

  render() {
    return (
      <div className={'background'}>
        <Navigation />
        <div className={cx("full-screen")}>
          <div>
            <h1 className={cx("header")}>Where to?</h1>
            <br/>
            <CitySelect /> 
            <ReactDatesPicker />
          </div>
        </div>
      </div>

    )
  }
}