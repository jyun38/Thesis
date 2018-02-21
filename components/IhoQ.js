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
					<Checkbox q_ID = {"q_57"} name = {"deceiving others by lying or presenting oneself with false symptoms"}/>
					<Checkbox q_ID = {"q_58"} name = {"violation of others’ rights (E.g. robbery, exploitation, disregard of others’ safety, observing an unsuspecting person who is naked)"}/>
					<Checkbox q_ID = {"q_59"} name = {"physical violence"}/>
					<Checkbox q_ID = {"q_60"} name = {"verbal violence"}/>
				</div>
				<br/>
				
				<div className = "questions">
					Does the client feel pleasure or fascination from setting fire?
					<Radio q_ID = {"q_61"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_61"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_61"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default IhoQ