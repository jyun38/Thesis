import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class IhoQ extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question2Choice : null
		}

	}

	setQ2Answer = (e) => {
		this.setState({
			question2Choice: e.target.value
		});
	}

	countAll = () => {
 		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length);
 		console.log("question 2 : ", this.state.question2Choice);
 	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					The client has behavior with intention to harm others such as:
					<Checkbox name = {"violation of others’ rights (E.g. robbery, exploitation, disregard of others’ safety, observing an unsuspecting person who is naked)"}/>
					<Checkbox name = {"physical violence"}/>
					<Checkbox name = {"verbal violence"}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client feel pleasure or fascination from setting fire?
					<Radio txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default IhoQ