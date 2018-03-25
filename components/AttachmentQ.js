import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class AttachmentQ extends Component {

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
		//send clicked Q_ID to App
		this.props.sendQ_ID(this.state.checkedIDs);
		this.props.sendRadio_ID(this.state.radioIDs);
	}

	render() {
		var radioSet = new Set(this.props.backRadio_ID);
		return(
			<div className = "questionsCon">
				<div className = "questions">
					<div className = "questionText">
					Does the client use any mind-altering substances such as inhalant substance, Phencyclidine, Cannabis, 
					sedative substance, sedative, hypnotic, and anxiolytic?
					</div>
					<Radio q_ID = {"q_9"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_9-Yes")}/>
	        <Radio q_ID = {"q_9"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_9-No")}/> 
	        <Radio q_ID = {"q_9"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_9-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
	      	Does the client have significant absence of relationships with others?
	      	</div>
	      	<Radio q_ID = {"q_10"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_10-Yes")}/>
	        <Radio q_ID = {"q_10"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_10-No")}/> 
	        <Radio q_ID = {"q_10"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_10-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Is the client often suspicious about others in relationships? (E.g. disloyalty, abandonment, deception)
		      </div>
		      <Radio q_ID = {"q_11"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_11-Yes")}/>
		      <Radio q_ID = {"q_11"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_11-No")}/> 
		      <Radio q_ID = {"q_11"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_11-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Is the client afraid of relationships? (E.g. separation, shame, abandonment)
					</div>
					<Radio q_ID = {"q_12"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_12-Yes")}/>
		      <Radio q_ID = {"q_12"} txt = {"No"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_12-No")}/> 
		      <Radio q_ID = {"q_12"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_12-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client act inappropriately while interacting with others? (E.g. excessive attention seeking, 
						preoccupation with details, need for admiration)
					</div>
					<Radio q_ID = {"q_13"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_13-Yes")}/>
		      <Radio q_ID = {"q_13"} txt = {"No"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_13-No")}/> 
		      <Radio q_ID = {"q_13"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_13-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client encounter any difficulties with socializing with others? (E.g. understanding and expressing
		       gestural and emotional cues, communicating with others)
		      </div>
		      <Radio q_ID = {"q_14"} txt = {"Yes"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_14-Yes")}/>
		      <Radio q_ID = {"q_14"} txt = {"No"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_14-No")}/> 
		      <Radio q_ID = {"q_14"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_14-Not enough information")}/> 
	      </div>
      </div>

		)
	}
}

export default AttachmentQ