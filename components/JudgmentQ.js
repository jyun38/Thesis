import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class JudgmentQ extends Component {

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

	render = () => {
		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
				<div className = "questions">
					<div className = "questionText">
					Does the client encounter any difficulties in making decisions? (E.g. life decisions, decisions regarding 
						well-being of self or others)
					</div>
					<Radio q_ID = {"q_63"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_63-Yes")}/>
	        <Radio q_ID = {"q_63"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_63-No")}/> 
	        <Radio q_ID = {"q_63"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_63-Not enough information")}/>
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Does the client choose to oppose authorities or rules? (*Note: for children and adolescents, authorities can
					 be adults)
					</div>
					<Radio q_ID = {"q_64"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_64-Yes")}/>
	        <Radio q_ID = {"q_64"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_64-No")}/> 
	        <Radio q_ID = {"q_64"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_64-Not enough information")}/>
				</div>
			</div>
		)
	}
}

export default JudgmentQ