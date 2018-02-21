import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SensoryQ extends Component {
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
					Is the client influenced by any sensory impairments?
					<Radio q_ID = {"q_84"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_84"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_84"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default SensoryQ