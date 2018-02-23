import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class RitualQ extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question1Choice: null, 
			question2Choice: null,
			question3Choice: null,
			question4Choice: null,
			question5Choice: null,
			question6Choice: null
		}
	}

	// setQ1Answer = (e) => {
	// 	this.setState({
	// 		question1Choice: e.target.value
	// 	});
	// }
	
	render = () => {
		return(

			<div className = "questionsCon">
				<div className = "questions">
					Is the client preoccupied with details, rules, sameness, or routines?
					<Radio q_ID = {"q_71"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_71"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_71"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client have increased goal-directed or compulsive behavior?
					<Radio q_ID = {"q_72"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_72"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_72"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client repetitively pull out hair or try to resist hair pulling?
					<Radio q_ID = {"q_73"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
	        <Radio q_ID = {"q_73"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
	        <Radio q_ID = {"q_73"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client repetitively pick skin or try to resist skin picking?
					<Radio q_ID = {"q_74"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
	        <Radio q_ID = {"q_74"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
	        <Radio q_ID = {"q_74"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/>
				</div>	
				<br/>
				<div className = "questions">
					Does the client repetitively violate others’ rights or age-appropriate societal norms?
					<Radio q_ID = {"q_75"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
	        <Radio q_ID = {"q_75"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
	        <Radio q_ID = {"q_75"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/>
				</div>	
				<br/>	
				<div className = "questions">
					Is the client preoccupied with his/her/their health or show maladaptive avoidance?
					<Radio q_ID = {"q_76"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
	        <Radio q_ID = {"q_76"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
	        <Radio q_ID = {"q_76"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/>
				</div>		
				<button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}

}

export default RitualQ