import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class DetachmentQ extends Component {

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
		//send clicked Q_ID to App
		this.props.sendQ_ID(this.state.checkedIDs);
		this.props.sendRadio_ID(this.state.radioIDs);
	}  

	render() {
		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
				<div className = "questions">
	      	Does the client feel detached from the world? (Derealization)
	      	<Radio q_ID = {"q_36"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_36-Yes")}/>
	        <Radio q_ID = {"q_36"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_36-No")}/> 
	        <Radio q_ID = {"q_36"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_36-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client feel detached from oneself? (Depersonalization)
		      <Radio q_ID = {"q_37"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_37-Yes")}/>
		      <Radio q_ID = {"q_37"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_37-No")}/> 
		      <Radio q_ID = {"q_37"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_37-Not enough information")}/> 
	      </div>
			</div>
		)
	}
}

export default DetachmentQ