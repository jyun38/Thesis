import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class AdlQ extends Component {
	constructor(props){
		super(props);
		this.state = {
			question1Choice: null, 
			clickedQ_ID: null,
			allQsAnswered: false
		}	
	}

	componentDidMount() {
    this.loadInterval = setInterval(
      () => this.adlAnswer(),
      0.0001
    );
  }

  componentWillUnmount() { 
  	clearInterval(this.loadInterval); 
  }

	adlCallBack = (dataFromChild) => {
		this.setState({ 
			clickedQ_ID: dataFromChild 
		});
		// console.log("hi, in AdlQ.js"); 
	}

	adlAnswer = () => {
		// this.setQ1Answer;
		this.props.sendQ_ID(this.state.clickedQ_ID);
	}

	render() {
		// console.log(this.state.clickedQ_ID);
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client use any mind-altering substances such as Cannabis, Hallucinogen, and Phencyclidine? <br/>
	        <Radio q_ID = {"q_1"} txt = {"Yes"} name = "1" callbackFromParent = {this.adlCallBack} onAnswer = {this.adlAnswer} />
	        <Radio q_ID = {"q_1"} txt = {"No"} name = "1" callbackFromParent = {this.adlCallBack} onAnswer = {this.adlAnswer}/> 
	        <Radio q_ID = {"q_1"} txt = {"Not enough information"} name = "1" callbackFromParent = {this.adlCallBack} onAnswer = {this.adlAnswer}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	The client encounters difficulties with: (choose more than one if necessary)<br/>
	        <Checkbox q_ID = {"q_2"} name = {"personal care, such as eating, dressing, elimination, and hygiene"}/>
	        <Checkbox q_ID = {"q_3"} name = {"making decisions"}/>
	        <Checkbox q_ID = {"q_4"} name = {"household tasks, such as taking care of children, grocery shopping, transportation, and money management"}/>	        	        	        
	        <Checkbox q_ID = {"q_5"} name = {"work, such as scheduling, organizing events, solving problems, and working with co-workers"}/>
	        <Checkbox q_ID = {"q_6"} name = {"with interacting and communicating with others"}/>
	        <Checkbox q_ID = {"q_7"} name = {"recreational activities, such as participating in outdoor activities, watching movies, and listening to music"}/>
	        <Checkbox q_ID = {"q_8"} name = {"academic functioning, such as memory, reasoning, and comprehension"}/>
	      </div>
      </div>
		)
	}
}

export default AdlQ