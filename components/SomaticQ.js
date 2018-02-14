import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SomaticQ extends Component {
	constructor(props){
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

	setQ1Answer = (e) => {
		if(this.state.question1Choice != null){
				this.setState({
				question1Choice: this.state.question1Choice + "," + e.target.value
			});
		}
		else{
			this.setState({
				question1Choice: e.target.value
			})
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

	countAll = () => {
 		console.log("question 1 : ", this.state.question1Choice);
 		console.log("question 2 : ", this.state.question2Choice);
 		console.log("question 3 : ", this.state.question3Choice);
	 	console.log("question 4 : ", this.state.question4Choice);
 		console.log("question 5 : ", this.state.question5Choice);
 		console.log("question 6 : ", this.state.question6Choice); 		
 	}

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					In which of the following body parts does the client have discomfort with? (choose more than one if necessary)
					<Radio txt = {"Head"} onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"Mouth"} onAnswer = {this.setQ1Answer}/> 
	        <Radio txt = {"Face"} onAnswer = {this.setQ1Answer}/> 
					<Radio txt = {"Hand"} onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"Ear"} onAnswer = {this.setQ1Answer}/> 
	        <Radio txt = {"Stomach"} onAnswer = {this.setQ1Answer}/> 	        
					<Radio txt = {"Muscle"} onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"Heart"} onAnswer = {this.setQ1Answer}/> 
	        <Radio txt = {"Pupil"} onAnswer = {this.setQ1Answer}/>
	        <Radio txt = {"Urine"} onAnswer = {this.setQ1Answer}/> 	        
	        <Radio txt = {"Body"} onAnswer = {this.setQ1Answer}/> 	        
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have any impairments in cognitive mechanism that might be caused by brain injury?
	      	<Radio txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client experience significant weight changes? (E.g. weight loss caused by purging or restriction of energy intake)
		      <Radio txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have an abnormal appetite compared to others? (E.g. increased appetite, decreased appetite)
					<Radio txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client encounter any difficulties in sexual functioning? (E.g. difficulties in obtaining erection in sexual activity, delay in ejaculation, reduced intensity of orgasmic sensations)
					<Radio txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Is the client’s social activities limited by any physical impairments?
		      <Radio txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
	      </div>
				<button onClick={this.countAll}>{"Done"}</button>

      </div>

		)
	}
}

export default SomaticQ