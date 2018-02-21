import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

class CogDevQ extends Component {

	constructor(props){
		super(props);
	}

 	countAll = () => {
		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length);
	}

	render() {
		return(
			<div className = "questionsCon">
	      <div className = "questions">
					The client encounters difficulties with: (choose more than one if necessary)<br/>
	        <Checkbox q_ID = {"q_24"} name = {"speaking clearly (E.g. slurred speech, broken words, reduced vocabulary)"}/>
	        <Checkbox q_ID = {"q_25"} name = {"understanding what other people say (E.g. understanding gestures, words, or grammar)"}/>
	        <Checkbox q_ID = {"q_26"} name = {"learning a language (E.g. reading passages, writing, spelling words)"}/>
	        <Checkbox q_ID = {"q_27"} name = {"learning fields other than language (E.g. understanding concepts involving time and mathematics, matching based on physical characteristics)"}/>
	        <Checkbox q_ID = {"q_28"} name = {"adapting to situations"}/>
	        <Checkbox q_ID = {"q_29"} name = {"recalling things, such as events and concepts"}/>
	        <Checkbox q_ID = {"q_30"} name = {"controlling emotions"}/>
	      </div>
	      <button onClick={this.countAll}>{"Done"}</button>
      </div>
		)
	}
}

export default CogDevQ