import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class SomaticQ extends Component {
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
			// console.log(arr);
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
		// set of all IDs
		var idSet = new Set(this.props.chosen_ID);
		// set of all radio IDs
		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
				<div className = "questions">
					<div className = "questionText">
					In which of the following body parts does the client have discomfort with? (choose more than one if necessary)
	        </div>
	        <Checkbox q_ID = {"q_93"} name = {"Body"} 
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_93")}/> 	        					
					<Checkbox q_ID = {"q_94"} name = {"Head"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_94")}/>
					<Checkbox q_ID = {"q_95"} name = {"Muscle"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_95")}/>
	        <Checkbox q_ID = {"q_96"} name = {"Mouth"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_96")}/> 
	        <Checkbox q_ID = {"q_97"} name = {"Pupil"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_97")}/>
	        <Checkbox q_ID = {"q_98"} name = {"Stomach"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_98")}/> 
					<Checkbox q_ID = {"q_99"} name = {"Hand"} 
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_99")}/>	        	        
	        <Checkbox q_ID = {"q_100"} name = {"Face"}
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_100")}/> 
	        <Checkbox q_ID = {"q_101"} name = {"Ear"} 
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_101")}/> 
	        <Checkbox q_ID = {"q_102"} name = {"Heart"} 
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_102")}/> 
	        <Checkbox q_ID = {"q_103"} name = {"Urine"} 
	        	callBackFromParent = {this.myCallBack} status = {idSet.has("q_103")}/> 	        
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have any impairments in cognitive mechanism that might be caused by brain injury?
					</div>
	      	<Radio q_ID = {"q_104"} txt = {"Yes"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_104-Yes")}/>
	        <Radio q_ID = {"q_104"} txt = {"No"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_104-No")}/> 
	        <Radio q_ID = {"q_104"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_104-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client experience significant weight changes? (E.g. weight loss caused by purging or restriction of energy intake)
		      </div>
		      <Radio q_ID = {"q_105"} txt = {"Yes"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_105-Yes")}/>
		      <Radio q_ID = {"q_105"} txt = {"No"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_105-No")}/> 
		      <Radio q_ID = {"q_105"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_105-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have an abnormal appetite compared to others? (E.g. increased appetite, decreased appetite)
					</div>
					<Radio q_ID = {"q_106"} txt = {"Yes"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_106-Yes")}/>
		      <Radio q_ID = {"q_106"} txt = {"No"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_106-No")}/> 
		      <Radio q_ID = {"q_106"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_106-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client encounter any difficulties in sexual functioning? (E.g. difficulties in obtaining erection in sexual activity, delay in ejaculation, reduced intensity of orgasmic sensations)
					</div>	
					<Radio q_ID = {"q_107"} txt = {"Yes"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_107-Yes")}/>
		      <Radio q_ID = {"q_107"} q_ID = {"q_107"} txt = {"No"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_107-No")}/> 
		      <Radio q_ID = {"q_107"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_107-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Is the client’s social activities limited by any physical impairments?
		      </div>
		      <Radio q_ID = {"q_108"} txt = {"Yes"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_108-Yes")}/>
		      <Radio q_ID = {"q_108"} txt = {"No"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_108-No")}/> 
		      <Radio q_ID = {"q_108"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_108-Not enough information")}/> 
	      </div>

      </div>

		)
	}
}

export default SomaticQ