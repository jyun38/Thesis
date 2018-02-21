import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class EatingQ extends Component {
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

	countAll = () => {
		console.log("question 1 : ", this.state.question1Choice);
 		console.log("question 2 : ", this.state.question2Choice);
 		console.log("question 3 : ", this.state.question3Choice);
	 	console.log("question 4 : ", this.state.question4Choice);
 		console.log("question 5 : ", this.state.question5Choice);
 		console.log("question 6 : ", this.state.question6Choice); 
	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client have any binge eating symptoms?
					<Radio q_ID = {"q_38"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_38"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_38"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client purge after eating?
	      	<Radio q_ID = {"q_39"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_39"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_39"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client show decreased appetite?
		      <Radio q_ID = {"q_40"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_40"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_40"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client feel embarrassed by how much he/she/they is/are eating?
					<Radio q_ID = {"q_41"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_41"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_41"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have an abnormal diet structure? (E.g. heavily relying on supplements, eating inedible 
						substances)
					<Radio q_ID = {"q_42"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_42"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_42"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client regurgitate while eating?
		      <Radio q_ID = {"q_43"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_43"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_43"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
	      </div>
				<button onClick={this.countAll}>{"Done"}</button>

      </div>
		)
	}
}

export default EatingQ