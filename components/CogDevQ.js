import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class CogDevQ extends Component {

	constructor(props){
		super(props);
		this.state = {
			checkedIDs: null,
			radioIDs: null
		}
	}

	componentDidMount() {
    this.loadInterval = setInterval(
      () => this.myAnswer(),
      0.001
    );
  }

  componentWillUnmount() { 
  	clearInterval(this.loadInterval); 
  }

  myCallBack = (dataFromChild) => {
		// if the element is already in the array
		if(CATIDS.indexOf(dataFromChild) != -1){
			CATIDS.splice(CATIDS.indexOf(dataFromChild), 1);
		}
		// if the element does not exist in the array
		else{
			CATIDS.push(dataFromChild);
		}
		this.setState({ 
			checkedIDs: CATIDS
		});
	}

	myAnswer = () => {
		this.props.sendQ_ID(this.state.checkedIDs);
		this.props.sendRadio_ID(this.state.radioIDs);
	}

	render() {

		// set of all IDs
		var idSet = new Set(this.props.chosen_ID);
		// set of all radio IDs
		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
	      <div className = "questions">
					The client encounters difficulties with: (choose more than one if necessary)<br/>
	        <Checkbox q_ID = {"q_24"} name = {"speaking clearly (E.g. slurred speech, broken words, reduced vocabulary)"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_24")}/>
	        <Checkbox q_ID = {"q_25"} name = {"understanding what other people say (E.g. understanding gestures, words, or grammar)"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_25")}/>
	        <Checkbox q_ID = {"q_26"} name = {"learning a language (E.g. reading passages, writing, spelling words)"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_26")}/>
	        <Checkbox q_ID = {"q_27"} name = {"learning fields other than language (E.g. understanding concepts involving time and mathematics, matching based on physical characteristics)"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_27")}/>
	        <Checkbox q_ID = {"q_28"} name = {"adapting to situations"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_28")}/>
	        <Checkbox q_ID = {"q_29"} name = {"recalling things, such as events and concepts"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_29")}/>
	        <Checkbox q_ID = {"q_30"} name = {"controlling emotions"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_30")}/>
	      </div>
      </div>
		)
	}
}

export default CogDevQ