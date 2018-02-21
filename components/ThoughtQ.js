import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class ThoughtQ extends Component {
	constructor(props) {
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
					Does the client encounter any difficulties in concentrating?
	        <Radio q_ID = {"q_129"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_129"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_129"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client demonstrate any signs of overthinking? (E.g. flight of ideas, over conscientiousness)
	      	<Radio q_ID = {"q_130"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_130"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_130"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client have any abnormal thoughts or perceptions about money?  (E.g. hoarding money for future 
		      	catastrophes)
		      <Radio q_ID = {"q_131"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_131"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_131"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have too much negative thought compared to other people? (E.g.  holding negative beliefs, 
						earing grudges persistently)
					<Radio q_ID = {"q_132"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_132"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_132"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Is the client preoccupied with concerns about physical health? (E.g. persistent thoughts about acquiring a
					 serious illness, recurrent thoughts of death)
					<Radio q_ID = {"q_133"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_133"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_133"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client hold suspicious thoughts toward surroundings and other people? (E.g. doubts about the 
						loyalty of friends, reads hidden demeaning meanings into benign remarks)
		      <Radio q_ID = {"q_134"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_134"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_134"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
		    </div>
		    <br/>
		    <div className = "questions">
					Does the client encounter any difficulties in recalling or accepting the traumatic events occurred in the 
					past? (E.g. inability to remember important aspect of the traumatic events, flashbacks)
		      <Radio q_ID = {"q_135"} txt = {"Yes"} name = "7" onAnswer = {this.setQ7Answer}/>
		      <Radio q_ID = {"q_135"} txt = {"No"} name = "7" onAnswer = {this.setQ7Answer}/> 
		      <Radio q_ID = {"q_135"} txt = {"Not enough information"} name = "7" onAnswer = {this.setQ7Answer}/> 
		    </div>
				<button onClick={this.countAll}>{"Done"}</button>
      </div>
		)
	}
}

export default ThoughtQ