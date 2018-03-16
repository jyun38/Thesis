import React, { Component } from 'react'
import '../main.css'

class Checkbox extends Component {

  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
  }

  checkCheckbox = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  checkFunc = () => {
    this.checkCheckbox();
    // this.props.onCheck();
    this.props.callBackFromParent(this.props.q_ID);
  }

  render() {
    return(
      <div>
        <input type="checkbox" id = {this.props.q_ID} value = {this.props.value} onChange = {this.checkFunc}/> 
        {this.props.name}
      </div>
    )
  }
}

export default Checkbox