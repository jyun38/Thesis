import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class AdlQ extends Component {
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

	myRadio = (id, value) => {
		if(id != null && value != null){
			arr[id] = value; 

			// element already in array
			if(CATIDS.indexOf(id) != -1){
				if(value == "No"){
					CATIDS.splice(CATIDS.indexOf(id), 1);
				}
			}
			// element not in array
			else{
				if(value != "No"){
					CATIDS.push(id);
				}	
			}
			this.setState({ 
				checkedIDs: CATIDS
			});	
			this.setState({
				radioIDs: arr
			});
		}
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
			<div className = "questionsCon adlQ"> 
				<div className = "questions"> 
				 	<div className = "questionText">
					Does the client use any mind-altering substances such as Cannabis, Hallucinogen, and Phencyclidine? 
					</div> 
	        <Radio q_ID = {"q_1"} txt = {"Yes"} name = "1" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_1-Yes")}/>
	        <Radio q_ID = {"q_1"} txt = {"No"} name = "1" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_1-No")}/> 
	        <Radio q_ID = {"q_1"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_1-Not enough information")}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
	      	The client encounters difficulties with: (choose more than one if necessary) 
	      	</div>
	        <Checkbox q_ID = {"q_2"} name = {"personal care, such as eating, dressing, elimination, and hygiene"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_2")}/>
	        <Checkbox q_ID = {"q_3"} name = {"making decisions"} 
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_3")}/>
	        <Checkbox q_ID = {"q_4"} name = {"household tasks, such as taking care of children, grocery shopping, transportation, and money management"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_4")}/>	        	        	        
	        <Checkbox q_ID = {"q_5"} name = {"work, such as scheduling, organizing events, solving problems, and working with co-workers"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_5")}/>
	        <Checkbox q_ID = {"q_6"} name = {"with interacting and communicating with others"} 
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_6")}/>
	        <Checkbox q_ID = {"q_7"} name = {"recreational activities, such as participating in outdoor activities, watching movies, and listening to music"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_7")}/>
	        <Checkbox q_ID = {"q_8"} name = {"academic functioning, such as memory, reasoning, and comprehension"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_8")}/>
	      	</div>
      </div>
 		)
	}
}

export default AdlQ