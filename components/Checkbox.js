import React, { Component } from 'react'
import '../main.css'

var checkStatus;
class Checkbox extends Component {

  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
    // console.log(this.props);
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
    // console.log(this.props.q_ID, this.props.status);
    if(this.props.status == true){
      checkStatus = "checked"
    }
    else{
      checkStatus = ""
    }
    return(
      <div>
        <input type="checkbox" id = {this.props.q_ID} value = {this.props.value} onChange = {this.checkFunc} 
          checked = {checkStatus}/> 
        {this.props.name}
      </div>
    )
  }
}

export default Checkbox