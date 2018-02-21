import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SelfConceptQ extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question2Choice: null, 
			question3Choice: null, 
			question4Choice: null
		}
	}

	setQ2Answer = (e) => {
		this.setState({
			question2Choice: e.target.value
		});
	}

	setQ3Answer = (e) => {
		this.setState({
			question3Choice: e.target.value
		});
	}

	setQ4Answer = (e) => {
		this.setState({
			question4Choice: e.target.value
		});
	}

	countAll = () => {
		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length);
		console.log("question 2 : ", this.state.question2Choice);
 		console.log("question 3 : ", this.state.question3Choice);
	 	console.log("question 4 : ", this.state.question4Choice);
	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					The client has encountered:
					<Checkbox q_ID = {"q_77"} name = {"disruption of identity (E.g. two or more different personality states, unstable self-image)"}/>
					<Checkbox q_ID = {"q_79"} name = {"establishment of self-image while socializing with others (E.g. need for excessive admiration, difficulties with expressing disagreement with others)"}/>
					<Checkbox q_ID = {"q_81"} name = {"lack of self-confidence"}/>
				</div>
				<br/>
				<div className = "questions">
					Is the client’s self-image heavily influenced by appearance, body shape, or weight?
					<Radio q_ID = {"q_78"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_78"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_78"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Is the client excessively confident about oneself? (E.g. high self-esteem, arrogance, self-importance)
					<Radio q_ID = {"q_80"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
	        <Radio q_ID = {"q_80"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
	        <Radio q_ID = {"q_80"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client have an exaggerated expression or emotion?					
					<Radio q_ID = {"q_82"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
	        <Radio q_ID = {"q_82"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
	        <Radio q_ID = {"q_82"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default SelfConceptQ