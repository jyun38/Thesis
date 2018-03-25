import React, { Component } from 'react'
import '../main.css'
import AdlQ from './AdlQ.js'
import Question from './Question.js'


class Category extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  catClick = () => {
    this.props.sendCat(this.props.name);
    // console.log(this.props.doneAdl)
  }

  render() {  
    var _style;
    if(this.props.status == true){
      _style = {
        color: "grey"
      }
    }
    else{
      _style = {
        color: "#2C4087"
      }
    }
    return (
      <div>
        <button className = "catButton" style = {_style} onClick = {this.catClick}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

export default Category