import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'


class Radio extends Component {

  constructor(props){
    super(props);
    console.log(this.props.q_ID);
  }

  render() {
    return(
      <div>
        <input type="radio" id = {this.props.q_ID} name = {this.props.name} value = {this.props.txt} onClick = {this.props.onAnswer}/> 
        {this.props.txt} <br/>
        
      </div>
    )
  }
}

export default Radio