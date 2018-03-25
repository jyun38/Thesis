import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'

var checkStatus;

class Radio extends Component {
  constructor(props){
    super(props);
  }

  myFunc = () => {
    //send q_ID of radio button
    // this.props.callBackFromParent(this.props.q_ID);
    this.props.sendValue(this.props.q_ID, this.props.txt);
  }

  render() {
    if(this.props.status == true){
      checkStatus = "true"
    }
    else{
      checkStatus = ""
    }
    return(
      <div className="optionLists">
        <input  type="radio" id = {this.props.q_ID} name = {this.props.name} value = {this.props.txt} 
        onChange = {this.myFunc} checked = {checkStatus}/> 
        {this.props.txt} <br/>
      </div>
    )
  }
}

export default Radio