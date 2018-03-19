import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class MotorQ extends Component {
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
					The client experiences: (choose more than one if necessary)
					<Checkbox q_ID = {"q_65"} name = {"excessive movement (E.g. vocal tics, psychomotor agitation, periods of inexhaustibility)"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_65")}/>
					<Checkbox q_ID = {"q_66"} name = {"lack of movement (E.g. psychomotor retardation, depressed reflexes, stupor)"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_66")}/>
					<Checkbox q_ID = {"q_67"} name = {"any disorganized, catatonic, or uncoordinated behavior"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_67")}/>
				</div>
			</div>
		)
	}
}

export default MotorQ