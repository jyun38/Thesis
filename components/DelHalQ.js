import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class DelHalQ extends Component {

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

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client experience hallucinations, such as witnessing events occurred to others and experiencing 
					auditory illusions?
					<Radio txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client experience delusions, such as preoccupation with fantasies of unlimited success?
	      	<Radio txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}

}

export default DelHalQ