import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class FeelingQ extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question2Choice: null, 
			question3Choice: null,
			question4Choice: null,
			question5Choice: null,
			question6Choice: null,
			question7Choice: null
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

	setQ7Answer = (e) => {
		this.setState({
			question7Choice: e.target.value
		});
	}

	countAll = () => {
		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length);
		console.log("question 2 : ", this.state.question2Choice);
 		console.log("question 3 : ", this.state.question3Choice);
	 	console.log("question 4 : ", this.state.question4Choice);
 		console.log("question 5 : ", this.state.question5Choice);
 		console.log("question 6 : ", this.state.question6Choice); 
 		console.log("question 7 : ", this.state.question7Choice); 

	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client show a pattern of irritable or angry mood?		      
					<Radio q_ID = {"q_44"} txt = {"Yes"} name = "1" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_44"} txt = {"No"} name = "1" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_44"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
				<div className = "questions">
					The client experiences feelings of: (choose more than one if necessary)<br/>
					<Checkbox q_ID = {"q_45"}name = {"disinterest in activities or lack of empathy for others"}/>
	        <Checkbox q_ID = {"q_46"} name = {"sadness, emptiness, distress, or hopelessness"}/>
	        <Checkbox q_ID = {"q_47"} name = {"excitement, pleasure, or gratification"}/>
	        <Checkbox q_ID = {"q_48"} name = {"fear"}/>
	        <Checkbox q_ID = {"q_49"}name = {"nervousness, anxiety, stress, or frustration?"}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client experience mood instability? 
	      	<Radio q_ID = {"q_50"} txt = {"Yes"} name = "3" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_50"} txt = {"No"} name = "3" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_50"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      
	      <div className = "questions">
					Is the client excessively self-conscious? (E.g. worthlessness, guilt, gender incongruence)
					<Radio q_ID = {"q_51"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_51"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_51"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client experience distress regarding gender identity? (E.g. preference for cross-dressing, 
						preference for activities stereotypically engaged by the other gender, desire to be treated as the other 
						gender)
					<Radio q_ID = {"q_52"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_52"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_52"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		     	Does the client have abnormal sexual desires? (E.g. sexual arousal from cross-dressing, humiliation, 
		     		physical or psychological suffering of another person)
		      <Radio q_ID = {"q_53"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_53"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_53"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
	      </div>
	      <div className = "questions">
					Does the client experience absent or reduced excitement, interest, or thoughts in regards to sexual 
					activities?
					<Radio q_ID = {"q_54"} txt = {"Yes"} name = "7" onAnswer = {this.setQ7Answer}/>
	        <Radio q_ID = {"q_54"} txt = {"No"} name = "7" onAnswer = {this.setQ7Answer}/> 
	        <Radio q_ID = {"q_54"} txt = {"Not enough information"} name = "7" onAnswer = {this.setQ7Answer}/> 
	      </div>
	      <br/>
				<button onClick={this.countAll}>{"Done"}</button>
      </div>

		)
	}
}

export default FeelingQ