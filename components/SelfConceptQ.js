import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class SelfConceptQ extends Component {

	constructor(props) {
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
			// console.log(arr);
			this.setState({
				radioIDs: arr
			});
		}
	}

	myAnswer = () => {
		this.props.sendQ_ID(this.state.checkedIDs);
		this.props.sendRadio_ID(this.state.radioIDs);
	}

	render = () => {
		// set of all IDs
		var idSet = new Set(this.props.chosen_ID);
		// set of all radio IDs
		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
				<div className = "questions">
					The client has encountered:
					<Checkbox q_ID = {"q_77"} name = {"disruption of identity (E.g. two or more different personality states, unstable self-image)"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_77")}/>
					<Checkbox q_ID = {"q_79"} name = {"establishment of self-image while socializing with others (E.g. need for excessive admiration, difficulties with expressing disagreement with others)"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_79")}/>
					<Checkbox q_ID = {"q_81"} name = {"lack of self-confidence"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_81")}/>
				</div>
				<br/>
				<div className = "questions">
					Is the client’s self-image heavily influenced by appearance, body shape, or weight?
					<Radio q_ID = {"q_78"} txt = {"Yes"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_78-Yes")}/>
	        <Radio q_ID = {"q_78"} txt = {"No"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_78-No")}/> 
	        <Radio q_ID = {"q_78"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_78-Not enough information")}/>
				</div>
				<br/>
				<div className = "questions">
					Is the client excessively confident about oneself? (E.g. high self-esteem, arrogance, self-importance)
					<Radio q_ID = {"q_80"} txt = {"Yes"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_80-Yes")}/>
	        <Radio q_ID = {"q_80"} txt = {"No"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_80-No")}/> 
	        <Radio q_ID = {"q_80"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_80-Not enough information")}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client have an exaggerated expression or emotion?					
					<Radio q_ID = {"q_82"} txt = {"Yes"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_82-Yes")}/>
	        <Radio q_ID = {"q_82"} txt = {"No"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_82-No")}/> 
	        <Radio q_ID = {"q_82"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_82-Not enough information")}/>
				</div>
			</div>
		)
	}
}

export default SelfConceptQ