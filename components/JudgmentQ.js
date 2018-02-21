import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class JudgmentQ extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question1Choice: null,
			question2Choice: null
		}
	}

	setQ1Answer = (e) => {
		this.setState({
			question1Choice: e.target.value
		});
	}

	setQ2Answer = (e) => {
		this.setState({
			question2Choice: e.target.value
		});
	}

	countAll = () => {
		console.log("question 1 : ", this.state.question1Choice);
		console.log("question 2 : ", this.state.question2Choice);
	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client encounter any difficulties in making decisions? (E.g. life decisions, decisions regarding 
						well-being of self or others)
					<Radio q_ID = {"q_63"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_63"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_63"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client choose to oppose authorities or rules? (*Note: for children and adolescents, authorities can
					 be adults)
					<Radio q_ID = {"q_64"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_64"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_64"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default JudgmentQ