import React, { Component } from 'react'
import '../main.css'
import Category from './Category.js'
import AdlQ from './AdlQ.js'
import AttachmentQ from './AttachmentQ.js'
import AttentionQ from './AttentionQ.js'
import BehaviorQ from './BehaviorQ.js'
import CogDevQ from './CogDevQ.js'
import CommunicationQ from './CommunicationQ.js'
import DelHalQ from './DelHalQ.js'
import DetachmentQ from './DetachmentQ.js'
import EatingQ from './EatingQ.js'
import FeelingQ from './FeelingQ.js'
import IhoQ from './IhoQ.js'
import ImpulseQ from './ImpulseQ.js'
import JudgmentQ from './JudgmentQ.js'
import MotorQ from './MotorQ.js'
import OrientationQ from './OrientationQ.js'
import RiskQ from './RiskQ.js'
import RitualQ from './RitualQ.js'
import SelfConceptQ from './SelfConceptQ.js'
import SelfHarmQ from './SelfHarmQ.js'
import SensoryQ from './SensoryQ.js'
import SleepQ from './SleepQ.js'
import SomaticQ from './SomaticQ.js'
import SubstanceQ from './SubstanceQ.js'
import ThoughtQ from './ThoughtQ.js'
import Radio from './Radio.js'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

// var brainIDS = '';
// var brainIDs = new Set();

var brainIDS = [];
class CatList extends Component {

	constructor(props) {

		super(props);
		// console.log(this.props);
		this.state = {
			clickedCatName: null,
			clickedAdlQ_ID: null,
			clickedBrainIDs: null
		};
		// console.log(this.props);
	}

	componentDidMount() {
    this.loadInterval = setInterval(
      () => this.myFunc(),
      0.001
    );
  }

  componentWillUnmount() { 
  	clearInterval(this.loadInterval); 
  }

	//get clicked category name
	getCat = (dataFromChild) => {
		this.setState({ 
			clickedCatName: dataFromChild
		});
	}

	// get clicked Q_ID
	getBrainQ_ID = (dataFromChild) => {
		// console.log(dataFromChild)
		// console.log(typeof(dataFromChild));
		// brainIDs.clear(); 
		// if(dataFromChild != null){
		// 			for (var i = 0; i<dataFromChild.length; i++){
		// 	brainIDs.add(dataFromChild[i]);
	
		// }
		// }

		// console.log(dataFromChild);
		// console.log(brainIDs);
		// if(dataFromChild != null){
		// 	// console.log("IN HERE");
  //    for(var i=0; i<dataFromChild.length; i++){
  //    		// console.log("IN FOR LOOP");
  //      // if(brainIDS.indexOf(dataFromChild[i]) == -1){
  //      	 // console.log("ADDING ELEMENTS");
  //    	if(brainIDS.indexOf(dataFromChild[i]) == -1){
  //    	 	console.log("YES")
  //    	 	brainIDS.push(dataFromChild[i]);
  //    	}
  //        // brainIDS.push(dataFromChild[i]);
  //      // }
  //    	}
  // 	}
  	// console.log(dataFromChild);
		// console.log(brainIDS);
		this.setState({ 
			clickedBrainIDs: dataFromChild
		});

		// console.log(dataFromChild);
	}

	// getAttQ_ID = (dataFromChild) => {
	// 	this.setState({ 
	// 		clickedAttQ_ID: dataFromChild 
	// 	});
	// }

	// pass clicked Q_ID to app
	myFunc = () => {
		// this.setQ1Answer;
		this.props.sendBrain(this.state.clickedBrainIDs);
		// this.props.AdlIDs(this.state.clickedAdlQ_ID);
		// this.props.AttIDs(this.state.clickedAttQ_ID);
	}

	render() {

		var categoriesList;  
		if(this.props.name == "Brain"){
			categoriesList = ['Activities of Daily Living', 'Attention', 'Behavior', 'Cognitive Development', 'Communication', 
			'Delusion/Hallucination', 'Impulse', 'Judgment', 'Orientation', 'Thought'];
		}
		else if(this.props.name == "Emotion"){
			categoriesList = ['Attachment', 'Delusion/Hallucination', 'Detachment', 'Feeling', 'Impulse', 'Self-concept', 
			'Self-harm'];
		}
		else if(this.props.name == "Body"){
			categoriesList = ['Activities of Daily Living', 'Eating', 'Motor', 'Ritual', 'Sensory', 'Sleep', 'Somatic', 'Substance'];
		}
		else if(this.props.name == "Social"){
			categoriesList = ['Activities of Daily Living', 'Attachment', 'Communication', 'Inflicting Harm on Others', 
			'Self-concept'];
		}
		else{
			categoriesList = ['Activities of Daily Living', 'Behavior', 'Impulse', 'Risk', 'Ritual', 'Self-harm', 'Substance'];
		}

		return(	<div>
				<div className = "categoriesCon">
					{categoriesList.map((x, i) => 
						<Category name = {x} key = {i} sendCat = {this.getCat}/>)	
					}
				</div>
	
				<div>
					{this.state.clickedCatName == "Activities of Daily Living" && <AdlQ sendQ_ID = {this.getBrainQ_ID}/>} 
					{this.state.clickedCatName == "Attachment" && <AttachmentQ/>}  
					{this.state.clickedCatName == "Attention" && <AttentionQ sendQ_ID = {this.getBrainQ_ID}/>}
					{this.state.clickedCatName == "Behavior" && <BehaviorQ/>}
					{this.state.clickedCatName == "Cognitive Development" && <CogDevQ/>}
					{this.state.clickedCatName == "Communication" && <CommunicationQ/>}
					{this.state.clickedCatName == "Delusion/Hallucination" && <DelHalQ/>}
					{this.state.clickedCatName == "Detachment" && <DetachmentQ/>}
					{this.state.clickedCatName == "Eating" && <EatingQ/>}
					{this.state.clickedCatName == "Feeling" && <FeelingQ/>}
					{this.state.clickedCatName == "Inflicting Harm on Others" && <IhoQ/>}
					{this.state.clickedCatName == "Impulse" && <ImpulseQ/>}
					{this.state.clickedCatName == "Judgment" && <JudgmentQ/>}
					{this.state.clickedCatName == "Motor" && <MotorQ/>}
					{this.state.clickedCatName == "Orientation" && <OrientationQ/>}
					{this.state.clickedCatName == "Risk" && <RiskQ/>}
					{this.state.clickedCatName == "Ritual" && <RitualQ/>}
					{this.state.clickedCatName == "Self-concept" && <SelfConceptQ/>}
					{this.state.clickedCatName == "Self-harm" && <SelfHarmQ/>}
					{this.state.clickedCatName == "Sensory" && <SensoryQ/>}
					{this.state.clickedCatName == "Sleep" && <SleepQ/>}
					{this.state.clickedCatName == "Somatic" && <SomaticQ/>}
					{this.state.clickedCatName == "Substance" && <SubstanceQ/>}
					{this.state.clickedCatName == "Thought" && <ThoughtQ/>}
				</div>
			
			</div>
			)
	 
	}	
}

export default CatList