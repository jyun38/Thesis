import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

class AttachmentQ extends Component {

	constructor(props){
		super(props);
		this.state = {

		}	
	}

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client use any mind-altering substances such as inhalant substance, Phencyclidine, Cannabis, 
					sedative substance, sedative, hypnotic, and anxiolytic?
					<Radio q_ID = {"q_9"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_9"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_9"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client have significant absence of relationships with others?
	      	<Radio q_ID = {"q_10"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
	        <Radio q_ID = {"q_10"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
	        <Radio q_ID = {"q_10"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Is the client often suspicious about others in relationships? (E.g. disloyalty, abandonment, deception)
		      <Radio q_ID = {"q_11"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_11"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_11"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Is the client afraid of relationships? (E.g. separation, shame, abandonment)
					<Radio q_ID = {"q_12"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_12"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_12"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client act inappropriately while interacting with others? (E.g. excessive attention seeking, 
						preoccupation with details, need for admiration)
					<Radio q_ID = {"q_13"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_13"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_13"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client encounter any difficulties with socializing with others? (E.g. understanding and expressing
		       gestural and emotional cues, communicating with others)
		      <Radio q_ID = {"q_14"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_14"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_14"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
	      </div>
      </div>

		)
	}
}

export default AttachmentQ