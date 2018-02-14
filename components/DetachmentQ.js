import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

class DetachmentQ extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		question2Choice: null,
  		question3Choice: null
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

	countAll = () => {
		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length, 
			", question 2 : ", this.state.question2Choice, ", question 3 : ", this.state.question3Choice);
	}

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					In which of the following areas does the client have detachment difficulties with? (choose more than one if 
						necessary)
					<Checkbox name = {"surroundings"}/>
					<Checkbox name = {"events"}/>					
					<Checkbox name = {"identity"}/>
				</div>
				<br/>
				<div className = "questions">
	      	Does the client feel detached from the world around? (Derealization)
	      	<Radio txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client feel detached from oneself? (Depersonalization)
		      <Radio txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	     	<button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default DetachmentQ