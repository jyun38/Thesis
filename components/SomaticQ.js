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
	        <Radio q_ID = {"q_93"} txt = {"Body"} onAnswer = {this.setQ1Answer}/> 	        					
					<Radio q_ID = {"q_94"} txt = {"Head"} onAnswer = {this.setQ1Answer}/>
					<Radio q_ID = {"q_95"} txt = {"Muscle"} onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_96"} txt = {"Mouth"} onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_97"} txt = {"Pupil"} onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_98"} txt = {"Stomach"} onAnswer = {this.setQ1Answer}/> 
					<Radio q_ID = {"q_99"} txt = {"Hand"} onAnswer = {this.setQ1Answer}/>	        	        
	        <Radio q_ID = {"q_100"} txt = {"Face"} onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_101"} txt = {"Ear"} onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_102"} txt = {"Heart"} onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_103"} txt = {"Urine"} onAnswer = {this.setQ1Answer}/> 	        
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have any impairments in cognitive mechanism that might be caused by brain injury?
	      	<Radio q_ID = {"q_104"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_104"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_104"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client experience significant weight changes? (E.g. weight loss caused by purging or restriction of energy intake)
		      <Radio q_ID = {"q_105"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_105"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_105"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have an abnormal appetite compared to others? (E.g. increased appetite, decreased appetite)
					<Radio q_ID = {"q_106"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_106"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_106"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client encounter any difficulties in sexual functioning? (E.g. difficulties in obtaining erection in sexual activity, delay in ejaculation, reduced intensity of orgasmic sensations)
					<Radio q_ID = {"q_107"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_107"} q_ID = {"q_107"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_107"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Is the client’s social activities limited by any physical impairments?
		      <Radio q_ID = {"q_108"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_108"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_108"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
	      </div>
				<button onClick={this.countAll}>{"Done"}</button>

      </div>

		)
	}
}

export default SomaticQ