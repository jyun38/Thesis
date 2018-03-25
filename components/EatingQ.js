import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class EatingQ extends Component {
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
					Does the client have any binge eating symptoms?
					</div>
					<Radio q_ID = {"q_38"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_38-Yes")}/>
	        <Radio q_ID = {"q_38"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_38-No")}/> 
	        <Radio q_ID = {"q_38"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_38-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client purge after eating?
					</div>
	      	<Radio q_ID = {"q_39"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_39-Yes")}/>
	        <Radio q_ID = {"q_39"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_39-No")}/> 
	        <Radio q_ID = {"q_39"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_39-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client show decreased appetite?
		      </div>
		      <Radio q_ID = {"q_40"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_40-Yes")}/>
		      <Radio q_ID = {"q_40"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_40-No")}/> 
		      <Radio q_ID = {"q_40"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_40-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client feel embarrassed by how much he/she/they is/are eating?
					</div>
					<Radio q_ID = {"q_41"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_41-Yes")}/>
		      <Radio q_ID = {"q_41"} txt = {"No"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_41-No")}/> 
		      <Radio q_ID = {"q_41"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_41-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have an abnormal diet structure? (E.g. heavily relying on supplements, eating inedible 
						substances)
					</div>
					<Radio q_ID = {"q_42"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_42-Yes")}/>
		      <Radio q_ID = {"q_42"} txt = {"No"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_42-No")}/> 
		      <Radio q_ID = {"q_42"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_42-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client regurgitate while eating?
		      </div>
		      <Radio q_ID = {"q_43"} txt = {"Yes"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_43-Yes")}/>
		      <Radio q_ID = {"q_43"} txt = {"No"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_43-No")}/> 
		      <Radio q_ID = {"q_43"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_43-Not enough information")}/> 
	      </div>
      </div>
		)
	}
}

export default EatingQ