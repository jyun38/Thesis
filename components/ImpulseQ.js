import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class ImpulseQ extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		question1Choice : null
  	}
  }

	setQ1Answer = (e) => {
		this.setState({
			question1Choice: e.target.value
		});
	}

 	countAll = () => {
 		console.log("question 1 : ", this.state.question1Choice);
 	}

  render = () => {
  	return(
  		<div className = "questionsCon">
  			<div className = "questions">
  				Does the client encounter any difficulties with impulse control? (E.g. stealing and deception without 
  					obvious external rewards, harming others or oneself, binge eating, substance abuse)
  				<Radio q_ID = {"q_62"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_62"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_62"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
  			</div>
  			<button onClick={this.countAll}>{"Done"}</button>
  		</div>
  	)
  }
}

export default ImpulseQ