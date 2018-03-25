import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class BehaviorQ extends Component {

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
					<div className = "questionText">
					Does the client use any mind-altering substances such as Cannabis, Opioid, Hallucinogen, Phencyclidine, 
					and Cocaine?
					</div>
	        <Radio q_ID = {"q_16"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_16-Yes")}/>
	        <Radio q_ID = {"q_16"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_16-No")}/> 
	        <Radio q_ID = {"q_16"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_16-Not enough information")}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have excessive concerns about his/her/their physical health?
					</div>
	      	<Radio q_ID = {"q_17"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	      		status = {radioSet.has("q_17-Yes")}/>
	        <Radio q_ID = {"q_17"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_17-No")}/> 
	        <Radio q_ID = {"q_17"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_17-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client behave differently compared to others? (E.g. acting solitarily, passaging feces into 
		      	inappropriate places)
		      </div>
		      <Radio q_ID = {"q_18"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_18-Yes")}/>
		      <Radio q_ID = {"q_18"} txt = {"No"} name = "3" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_18-No")}/> 
		      <Radio q_ID = {"q_18"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_18-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client demonstrate rigidity or stubbornness? (E.g. restricted patterns of behavior, repetitive movements)
					</div>
					<Radio q_ID = {"q_19"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_19-Yes")}/>
		      <Radio q_ID = {"q_19"} txt = {"No"} name = "4" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_19-No")}/> 
		      <Radio q_ID = {"q_19"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_19-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have any abnormal eating behavior, such as binge eating and purging?
					</div>
					<Radio q_ID = {"q_20"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_20-Yes")}/>
		      <Radio q_ID = {"q_20"} txt = {"No"} name = "5" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_20-No")}/> 
		      <Radio q_ID = {"q_20"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_20-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client encounter any difficulties in adjusting to certain situations? (E.g. aggression, 
						self-injury)
					</div>
		      <Radio q_ID = {"q_21"} txt = {"Yes"} name = "6" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_21-Yes")}/>
		      <Radio q_ID = {"q_21"} txt = {"No"} name = "6" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_21-No")}/> 
		      <Radio q_ID = {"q_21"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_21-Not enough information")}/> 
		    </div>
		    <br/>
		    <div className = "questions">
		    	<div className = "questionText">
					Does the client have any abnormal behavior while interacting with others? (E.g. communicative deficits, 
						deception)
					</div>
		      <Radio q_ID = {"q_22"} txt = {"Yes"} name = "7" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_22-Yes")}/>
		      <Radio q_ID = {"q_22"} txt = {"No"} name = "7" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_22-No")}/> 
		      <Radio q_ID = {"q_22"} txt = {"Not enough information"} name = "7" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_22-Not enough information")} /> 
		    </div>
		    <br/>
		    <div className = "questions">
		    	<div className = "questionText">
					Does the client have any aggressive behavior, including physical or verbal aggression?
					</div>
		      <Radio q_ID = {"q_23"} txt = {"Yes"} name = "8" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_23-Yes")}/>
		      <Radio q_ID = {"q_23"} txt = {"No"} name = "8" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_23-No")}/> 
		      <Radio q_ID = {"q_23"} txt = {"Not enough information"} name = "8" sendValue = {this.myRadio}
		      	status = {radioSet.has("q_23-Not enough information")}/> 
		    </div>
      </div>
		)
	}
}

export default BehaviorQ