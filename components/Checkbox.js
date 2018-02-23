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

  render() {
    return(
      <div>
        <input type="checkbox" id = {this.props.q_ID} value = {this.props.value} onChange = {this.checkCheckbox} /> 
        {this.props.name}
      </div>
    )
  }
}

export default Checkbox