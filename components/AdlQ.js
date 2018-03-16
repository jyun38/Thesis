import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 
var ADLIDS = [];

class AdlQ extends Component {
	constructor(props){
		super(props);
		// console.log(this.props);
		this.state = {
			question1Choice: null, 
			clickedQ_ID: null
		}	
	}

	componentDidMount() {
    this.loadInterval = setInterval(
      () => this.adlAnswer(),
      0.001
    );
  }

  componentWillUnmount() { 
  	clearInterval(this.loadInterval); 
  }

	adlCallBack = (dataFromChild) => {
		// if the element is already in the array
		if(ADLIDS.indexOf(dataFromChild) != -1){
			ADLIDS.splice(ADLIDS.indexOf(dataFromChild), 1);
		}
		// if the element does not exist in the array
		else{
			ADLIDS.push(dataFromChild);
		}
		this.setState({ 
			clickedQ_ID: ADLIDS
		});
	}

	adlAnswer = () => {
		//send clicked Q_ID to App
		this.props.sendQ_ID(this.state.clickedQ_ID);
	}


	render() {
		// console.log("CHOSEN IDs: ", this.props.chosenID);
		// var chosen = new Set(this.props.chosenID);
		// console.log(chosen);
		// if(chosen.has("q_2")){
		// 	console.log("YEP.");
		// }
		return(
			<div className = "questionsCon adlQ"> 
				<div className = "questions"> 
					Does the client use any mind-altering substances such as Cannabis, Hallucinogen, and Phencyclidine? <br/>
	        <Radio q_ID = {"q_1"} txt = {"Yes"} name = "1" callBackFromParent = {this.adlCallBack}/>
	        <Radio q_ID = {"q_1"} txt = {"No"} name = "1" callBackFromParent = {this.adlCallBack}/> 
	        <Radio q_ID = {"q_1"} txt = {"Not enough information"} name = "1" callBackFromParent = {this.adlCallBack}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	The client encounters difficulties with: (choose more than one if necessary)<br/>
	        <Checkbox q_ID = {"q_2"} name = {"personal care, such as eating, dressing, elimination, and hygiene"}
	        	callBackFromParent = {this.adlCallBack} />
	        <Checkbox q_ID = {"q_3"} name = {"making decisions"} 
	        	callBackFromParent = {this.adlCallBack} />
	        <Checkbox q_ID = {"q_4"} name = {"household tasks, such as taking care of children, grocery shopping, transportation, and money management"}
	        	callBackFromParent = {this.adlCallBack} />	        	        	        
	        <Checkbox q_ID = {"q_5"} name = {"work, such as scheduling, organizing events, solving problems, and working with co-workers"}
	        	callBackFromParent = {this.adlCallBack} />
	        <Checkbox q_ID = {"q_6"} name = {"with interacting and communicating with others"} 
	        	callBackFromParent = {this.adlCallBack} />
	        <Checkbox q_ID = {"q_7"} name = {"recreational activities, such as participating in outdoor activities, watching movies, and listening to music"}
	        	callBackFromParent = {this.adlCallBack} />
	        <Checkbox q_ID = {"q_8"} name = {"academic functioning, such as memory, reasoning, and comprehension"}
	        	callBackFromParent = {this.adlCallBack} />
	      </div>
      </div>
 		)
	}
}

export default AdlQ