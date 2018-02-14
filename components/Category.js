import React, { Component } from 'react'
import '../main.css'
import AdlQ from './AdlQ.js'
import Question from './Question.js'


class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#C1ECF2'
    }
  }

  catClick = () => {
    this.props.callbackFromParent(this.props.name);
    // console.log(this.props.doneAdl)
  }

  render() {  
    return (
      <div>
        <button className = "catButton" style = {{backgroundColor : this.state.backgroundColor}} onClick = {this.catClick}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default Category