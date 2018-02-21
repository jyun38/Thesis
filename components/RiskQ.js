import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class RiskQ extends Component {

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
	
	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client have any risky behavior? (E.g. gambling, foolish business investments, sexual indiscretions, extreme outdoor activities)
					<Radio q_ID = {"q_69"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_69"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_69"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Is the client highly conservative about taking risks? 
					<Radio q_ID = {"q_70"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_70"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_70"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/>
				</div>
				<button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default RiskQ