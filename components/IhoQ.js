import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class IhoQ extends Component {

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

	render = () => {
		// set of all IDs
		var idSet = new Set(this.props.chosen_ID);
		// set of all radio IDs
		var radioSet = new Set(this.props.backRadio_ID);
		return(
			<div className = "questionsCon">
				<div className = "questions">
					The client has behavior with intention to harm others such as:
					<Checkbox q_ID = {"q_57"} name = {"deceiving others by lying or presenting oneself with false symptoms"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_57")}/>
					<Checkbox q_ID = {"q_58"} name = {"violation of others’ rights (E.g. robbery, exploitation, disregard of others’ safety, observing an unsuspecting person who is naked)"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_58")}/>
					<Checkbox q_ID = {"q_59"} name = {"physical violence"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_59")}/>
					<Checkbox q_ID = {"q_60"} name = {"verbal violence"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_60")}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client feel pleasure or fascination from setting fire?
					<Radio q_ID = {"q_61"} txt = {"Yes"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_61-Yes")}/>
	        <Radio q_ID = {"q_61"} txt = {"No"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_61-No")}/> 
	        <Radio q_ID = {"q_61"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_61-Not enough information")}/>
				</div>
			</div>
		)
	}
}

export default IhoQ