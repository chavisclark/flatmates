import React, {Component} from 'react'
import NavigationContainer from 'containers/NavigationContainer'
import classNames from 'classnames/bind'
import styles from 'css/main'

const cx = classNames.bind(styles);

export default class About extends Component {

  render() {
    return (
      <div>
        <div className={cx("container")}>
          <NavigationContainer />
        </div>
      </div>

    )
  }
}