import React, {Component} from 'react';
import sports from '../../images/sports.svg';
import outdoors from '../../images/outdoors.svg';
import nightlife from '../../images/nightlife.svg';
import casual from '../../images/casual.svg';

export default function Sort(ComposedComponent) {
  return class extends Component {
    sortCategoryIcon() {
      let outing = this.props.thisOuting;
      outing.icon = this.selectIcon(outing); 
      
      return outing;       
    }

    selectIcon(outing) {
      if (this.handleSports(outing))
        return sports;
      if (this.handleOutdoors(outing))
        return outdoors;
      if (this.handleNightlife(outing))
        return nightlife;
      if (this.handleCasual(outing))
        return casual;
    }

    handleSports(outing) {
      return outing.category === 'sports';
    }

    handleOutdoors(outing) {
      return outing.category === 'outdoors';
    }

    handleNightlife(outing) {
      return outing.category === 'nightlife';
    }

    handleCasual(outing) {
      return outing.category === 'casual';
    }

    render() {
      {this.sortCategoryIcon()}
        return <ComposedComponent {...this.props} />
    }
  }
}

