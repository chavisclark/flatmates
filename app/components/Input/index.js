import React, {Component} from 'react';

export default class Input extends Component {
  constructor(props){
    super()
  }

  render(){
    return (
      <input type={this.props.type}
        ref={this.props.reference}
        placeholder={this.props.placeholder}
        className={this.props.className} />
    )
  }
}