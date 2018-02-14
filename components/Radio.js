import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'


class Radio extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <input type="radio" name = {this.props.name} value = {this.props.txt} onClick = {this.props.onAnswer}/> 
        {this.props.txt} <br/>
        
      </div>
    )
  }
}

export default Radio