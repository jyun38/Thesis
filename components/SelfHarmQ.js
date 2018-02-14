import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SelfHarmQ extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question1Choice: null
		}
	}

	setQ1Answer = (e) => {
		this.setState({
			question1Choice: e.target.value
		});
	}

	countAll = () => {
		console.log("question 1 : ", this.state.question1Choice);
	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client have any behaviors that cause self-injury?
					<Radio txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default SelfHarmQ