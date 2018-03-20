import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class RitualQ extends Component {
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
					Is the client preoccupied with details, rules, sameness, or routines?
					<Radio q_ID = {"q_71"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_71-Yes")}/>
	        <Radio q_ID = {"q_71"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_71-No")}/> 
	        <Radio q_ID = {"q_71"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_71-Not enough information")}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client have increased goal-directed or compulsive behavior?
					<Radio q_ID = {"q_72"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_72-Yes")}/>
	        <Radio q_ID = {"q_72"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_72-No")}/> 
	        <Radio q_ID = {"q_72"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_72-Not enough information")}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client repetitively pull out hair or try to resist hair pulling?
					<Radio q_ID = {"q_73"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_73-Yes")}/>
	        <Radio q_ID = {"q_73"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_73-No")}/> 
	        <Radio q_ID = {"q_73"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_73-Not enough information")}/>
				</div>
				<br/>
				<div className = "questions">
					Does the client repetitively pick skin or try to resist skin picking?
					<Radio q_ID = {"q_74"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_74-Yes")}/>
	        <Radio q_ID = {"q_74"} txt = {"No"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_74-No")}/> 
	        <Radio q_ID = {"q_74"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_74-Not enough information")}/>
				</div>	
				<br/>
				<div className = "questions">
					Does the client repetitively violate others’ rights or age-appropriate societal norms?
					<Radio q_ID = {"q_75"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_75-Yes")}/>
	        <Radio q_ID = {"q_75"} txt = {"No"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_75-No")}/> 
	        <Radio q_ID = {"q_75"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_75-Not enough information")}/>
				</div>	
				<br/>	
				<div className = "questions">
					Is the client preoccupied with his/her/their health or show maladaptive avoidance?
					<Radio q_ID = {"q_76"} txt = {"Yes"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_76-Yes")}/>
	        <Radio q_ID = {"q_76"} txt = {"No"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_76-No")}/> 
	        <Radio q_ID = {"q_76"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_76-Not enough information")}/>
				</div>		
			</div>
		)
	}

}

export default RitualQ