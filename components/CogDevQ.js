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
	        <Checkbox name = {"speaking clearly (E.g. slurred speech, broken words, reduced vocabulary)"}/>
	        <Checkbox name = {"understanding what other people say (E.g. understanding gestures, words, or grammar)"}/>
	        <Checkbox name = {"learning a language (E.g. reading passages, writing, spelling words)"}/>
	        <Checkbox name = {"learning fields other than language (E.g. understanding concepts involving time and mathematics, matching based on physical characteristics)"}/>
	        <Checkbox name = {"adapting to situations"}/>
	        <Checkbox name = {"recalling things, such as events and concepts"}/>
	        <Checkbox name = {"controlling emotions"}/>
	      </div>
	      <button onClick={this.countAll}>{"Done"}</button>
      </div>
		)
	}
}

export default CogDevQ