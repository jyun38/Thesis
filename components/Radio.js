import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'


class Radio extends Component {

  constructor(props){
    super(props);
  }

  myFunc = () => {
    // this.props.onAnswer();
    //send q_ID of radio button
    this.props.callBackFromParent(this.props.q_ID);
  }

  render() {
    return(
      <div>
      
        <input type="radio" id = {this.props.q_ID} name = {this.props.name} value = {this.props.txt} onClick = {this.myFunc}/> 
        {this.props.txt} <br/>
      </div>
    )
  }
}

export default Radio