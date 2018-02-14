import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SleepQ extends Component {

	constructor(props){
		super(props);
		this.state = {
			question1Choice: null, 
			question2Choice: null, 
			question3Choice: null,
			question4Choice: null,
			question5Choice: null,
			question6Choice: null,
			question7Choice: null
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

	setQ5Answer = (e) => {
		this.setState({
			question5Choice: e.target.value
		});
	}

	setQ6Answer = (e) => {
		this.setState({
			question6Choice: e.target.value
		});
	}

	setQ7Answer = (e) => {
		this.setState({
			question7Choice: e.target.value
		});
	}

	countAll = () => {
 		console.log("question 1 : ", this.state.question1Choice);
 		console.log("question 2 : ", this.state.question2Choice);
 		console.log("question 3 : ", this.state.question3Choice);
	 	console.log("question 4 : ", this.state.question4Choice);
 		console.log("question 5 : ", this.state.question5Choice);
 		console.log("question 6 : ", this.state.question6Choice); 
 		console.log("question 7 : ", this.state.question7Choice); 		
 	}

 	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client have fatigue, drowsiness, or coma?
					<Radio txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client feel disturbed while sleeping? (E.g. awakening from sleep, snoring, breathing pauses during
	      	 sleep, having nightmares)
	      	<Radio txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client experience irrepressible need to sleep? (hypersomnia)
		      <Radio txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have trouble falling asleep? (E.g. insomnia, disturbing dreams)
					<Radio txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have decreased need for sleep?
					<Radio txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client sleepwalk or show any other complex motor or vocal behaviors while sleeping?
		      <Radio txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client have abnormal intervals for REM (Rapid Eye Movement)?
	      	<Radio txt = {"Yes"} name = "7" onAnswer = {this.setQ7Answer}/>
		      <Radio txt = {"No"} name = "7" onAnswer = {this.setQ7Answer}/> 
		      <Radio txt = {"Not enough information"} name = "7" onAnswer = {this.setQ7Answer}/> 
	      </div>
				<button onClick={this.countAll}>{"Done"}</button>

      </div>

		)
	}
}


export default SleepQ