import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class BehaviorQ extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question1Choice: null, 
			question2Choice: null, 
			question3Choice: null,
			question4Choice: null,
			question5Choice: null,
			question6Choice: null,
			question7Choice: null,
			question8Choice: null
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

	setQ8Answer = (e) => {
		this.setState({
			question8Choice: e.target.value
		});
	}


	countAll = () => {
		console.log(this.state);
		// console.log("question 1 : ", this.state.question1Choice);
		// console.log("question 2 : ", this.state.question2Choice);
 	// 	console.log("question 3 : ", this.state.question3Choice);
	 // 	console.log("question 4 : ", this.state.question4Choice);
 	// 	console.log("question 5 : ", this.state.question5Choice);
 	// 	console.log("question 6 : ", this.state.question6Choice);
 	// 	console.log("question 7 : ", this.state.question7Choice); 
 	// 	console.log("question 8 : ", this.state.question8Choice); 
	}

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client use any mind-altering substances such as Cannabis, Opioid, Hallucinogen, Phencyclidine, 
					and Cocaine?
	        <Radio q_ID = {"q_16"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_16"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_16"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have excessive concerns about his/her/their physical health?
	      	<Radio q_ID = {"q_17"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_17"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_17"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client behave differently compared to others? (E.g. acting solitarily, passaging feces into 
		      	inappropriate places)
		      <Radio q_ID = {"q_18"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_18"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_18"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client demonstrate rigidity or stubbornness? (E.g. restricted patterns of behavior, repetitive movements)
					<Radio q_ID = {"q_19"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_19"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_19"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have any abnormal eating behavior, such as binge eating and purging?
					<Radio q_ID = {"q_20"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_20"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_20"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client encounter any difficulties in adjusting to certain situations? (E.g. aggression, 
						self-injury)
		      <Radio q_ID = {"q_21"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_21"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_21"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
		    </div>
		    <br/>
		    <div className = "questions">
					Does the client have any abnormal behavior while interacting with others? (E.g. communicative deficits, 
						deception)
		      <Radio q_ID = {"q_22"} txt = {"Yes"} name = "7" onAnswer = {this.setQ7Answer}/>
		      <Radio q_ID = {"q_22"} txt = {"No"} name = "7" onAnswer = {this.setQ7Answer}/> 
		      <Radio q_ID = {"q_22"} txt = {"Not enough information"} name = "7" onAnswer = {this.setQ7Answer}/> 
		    </div>
		    <br/>
		    <div className = "questions">
					Does the client have any aggressive behavior, including physical or verbal aggression?
		      <Radio q_ID = {"q_23"} txt = {"Yes"} name = "8" onAnswer = {this.setQ8Answer}/>
		      <Radio q_ID = {"q_23"} txt = {"No"} name = "8" onAnswer = {this.setQ8Answer}/> 
		      <Radio q_ID = {"q_23"} txt = {"Not enough information"} name = "8" onAnswer = {this.setQ8Answer}/> 
		    </div>
				<button onClick={this.countAll}>{"Done"}</button>
      </div>
		)
	}
}

export default BehaviorQ