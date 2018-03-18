import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class DelHalQ extends Component {
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
					Does the client experience hallucinations, such as witnessing events occurred to others and experiencing 
					auditory illusions?
					<Radio q_ID = {"q_55"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_55-Yes")}/>
	        <Radio q_ID = {"q_55"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_55-No")}/> 
	        <Radio q_ID = {"q_55"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_55-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client experience delusions, such as preoccupation with fantasies of unlimited success?
	      	<Radio q_ID = {"q_56"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_56-Yes")}/>
	        <Radio q_ID = {"q_56"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_56-No")}/> 
	        <Radio q_ID = {"q_56"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_56-Not enough information")}/> 
	      </div>
			</div>
		)
	}
}

export default DelHalQ