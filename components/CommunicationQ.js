import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class CommunicationQ extends Component {

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
		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
				<div className = "questions">
					<div className = "questionText">
					Does the communicative deficits of the client affect his/her/their relationships?
					</div>
					<Radio q_ID = {"q_31"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_31-Yes")}/>
	        <Radio q_ID = {"q_31"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_31-No")}/> 
	        <Radio q_ID = {"q_31"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_31-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
	      	Does the client encounter any difficulties in adapting to rules for conversations? (E.g. storytelling, 
	      		taking turns in conversations, communicating to match context)
	      	</div>
	      	<Radio q_ID = {"q_32"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_32-Yes")}/>
	        <Radio q_ID = {"q_32"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_32-No")}/> 
	        <Radio q_ID = {"q_32"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_32-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client encounter any difficulties in interacting with others? (E.g. greeting, sharing information, 
		      	normal back-and-forth conversation)
		      </div>
		      <Radio q_ID = {"q_33"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_33-Yes")}/>
		      <Radio q_ID = {"q_33"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_33-No")}/> 
		      <Radio q_ID = {"q_33"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_33-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client face any limitation in comprehending speech or gesture?
					</div>
					<Radio q_ID = {"q_34"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_34-Yes")}/>
		      <Radio q_ID = {"q_34"} txt = {"No"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_34-No")}/> 
		      <Radio q_ID = {"q_34"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_34-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client encounter any difficulties in expressing his/her/their thoughts verbally?
					</div>
					<Radio q_ID = {"q_35"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_35-Yes")}/>
		      <Radio q_ID = {"q_35"} txt = {"No"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_35-No")}/> 
		      <Radio q_ID = {"q_35"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_35-Not enough information")}/> 
	      </div>
      </div>
		)
	}
}

export default CommunicationQ