import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var ATTIDS = [];

class AttentionQ extends Component {

	constructor(props){
		super(props);
		this.state = {
			question1Choice: null,
			clickedQ_ID: null
		}	
	}

	// setQ1Answer = (e) => {
	// 	this.setState({
	// 		question1Choice: e.target.value
	// 	});
	// }

	componentDidMount() {
    this.loadInterval = setInterval(
      () => this.attAnswer(),
      0.0001
    );
  }

	attCallBack = (dataFromChild) => {
		if(ATTIDS.indexOf(dataFromChild) == -1){
			ATTIDS.push(dataFromChild);
		}
		this.setState({ 
			clickedQ_ID: ATTIDS
		});
	}

  attAnswer = () => {
		//send clicked Q_ID to App
		// this.props.sendQ_ID(this.state.clickedQ_ID);
	}

	// countAll = () => {
	// 	console.log("question 1 : ", this.state.question1Choice);
	// }

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client have any hyperactive-impulsive symptom?
	        <Radio q_ID = {"q_15"} txt = {"Yes"} name = "1" callBackFromParent = {this.attCallBack} onAnswer = {this.attAnswer} />
	        <Radio q_ID = {"q_15"} txt = {"No"} name = "1" callBackFromParent = {this.attCallBack} onAnswer = {this.attAnswer}/> 
	        <Radio q_ID = {"q_15"} txt = {"Not enough information"} name = "1" callBackFromParent = {this.attCallBack} onAnswer = {this.attAnswer}/>
	      </div>
	      <br/>
      </div>
		)
	}
}

export default AttentionQ
