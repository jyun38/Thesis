import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class FeelingQ extends Component {

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
					Does the client show a pattern of irritable or angry mood?		      
					<Radio q_ID = {"q_44"} txt = {"Yes"} name = "1" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_44-Yes")}/>
		      <Radio q_ID = {"q_44"} txt = {"No"} name = "1" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_44-No")}/> 
		      <Radio q_ID = {"q_44"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_44-Not enough information")}/> 
	      </div>
	      <br/>
				<div className = "questions">
					The client experiences feelings of: (choose more than one if necessary)<br/>
					<Checkbox q_ID = {"q_45"}name = {"disinterest in activities or lack of empathy for others"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_45")}/>
	        <Checkbox q_ID = {"q_46"} name = {"sadness, emptiness, distress, or hopelessness"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_46")}/>
	        <Checkbox q_ID = {"q_47"} name = {"excitement, pleasure, or gratification"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_47")}/>
	        <Checkbox q_ID = {"q_48"} name = {"fear"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_48")}/>
	        <Checkbox q_ID = {"q_49"}name = {"nervousness, anxiety, stress, or frustration?"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_49")}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	Does the client experience mood instability? 
	      	<Radio q_ID = {"q_50"} txt = {"Yes"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_50-Yes")}/>
	        <Radio q_ID = {"q_50"} txt = {"No"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_50-No")}/> 
	        <Radio q_ID = {"q_50"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_50-Not enough information")}/> 
	      </div>
	      <br/>
	      
	      <div className = "questions">
					Is the client excessively self-conscious? (E.g. worthlessness, guilt, gender incongruence)
					<Radio q_ID = {"q_51"} txt = {"Yes"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_51-Yes")}/>
		      <Radio q_ID = {"q_51"} txt = {"No"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_51-No")}/> 
		      <Radio q_ID = {"q_51"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_51-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client experience distress regarding gender identity? (E.g. preference for cross-dressing, 
						preference for activities stereotypically engaged by the other gender, desire to be treated as the other 
						gender)
					<Radio q_ID = {"q_52"} txt = {"Yes"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_52-Yes")}/>
		      <Radio q_ID = {"q_52"} txt = {"No"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_52-No")}/> 
		      <Radio q_ID = {"q_52"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_52-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		     	Does the client have abnormal sexual desires? (E.g. sexual arousal from cross-dressing, humiliation, 
		     		physical or psychological suffering of another person)
		      <Radio q_ID = {"q_53"} txt = {"Yes"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_53-Yes")}/>
		      <Radio q_ID = {"q_53"} txt = {"No"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_53-No")}/> 
		      <Radio q_ID = {"q_53"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_53-Not enough information")}/> 
	      </div>
	      <div className = "questions">
					Does the client experience absent or reduced excitement, interest, or thoughts in regards to sexual 
					activities?
					<Radio q_ID = {"q_54"} txt = {"Yes"} name = "7" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_54-Yes")}/>
	        <Radio q_ID = {"q_54"} txt = {"No"} name = "7" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_54-No")}/> 
	        <Radio q_ID = {"q_54"} txt = {"Not enough information"} name = "7" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_54-Not enough information")}/> 
	      </div>
	      <br/>
      </div>

		)
	}
}

export default FeelingQ