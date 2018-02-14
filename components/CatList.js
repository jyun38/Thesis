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
import SelfConceptQ from './SelfConceptQ.js'
import SelfHarmQ from './SelfHarmQ.js'
import SensoryQ from './SensoryQ.js'
import SleepQ from './SleepQ.js'
import SomaticQ from './SomaticQ.js'
import SubstanceQ from './SubstanceQ.js'
import ThoughtQ from './ThoughtQ.js'


class CatList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickedCatName: null,
			adlDone: false
		};
	}

	myCallback = (dataFromChild) => {
		this.setState({ 
			clickedCatName: dataFromChild 
		});
	}

	getCheckAdl = (check) => {
		if(check == true){
			this.setState({
				adlDone: true
			})
		}
	}
	// getAdlChoice = (AdlAnswer) => {
	// 	console.log(AdlAnswer);
	// }

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
			categoriesList = ['Activities of Daily Living', 'Eating', 'Motor', 'Sensory', 'Sleep', 'Somatic', 'Substance'];
		}
		else if(this.props.name == "Social"){
			categoriesList = ['Activities of Daily Living', 'Attachment', 'Communication', 'Inflicting Harm on Others', 
			'Self-concept'];
		}
		else{
			categoriesList = ['Activities of Daily Living', 'Behavior', 'Impulse', 'Self-harm', 'Substance'];
		}

		return (
			<div>
				<div className = "categoriesCon">
					{categoriesList.map((x, i) => 
						<Category name = {x} key = {i} callbackFromParent = {this.myCallback}/>)	
					}
				</div>
				<div>
					{this.state.clickedCatName == "Activities of Daily Living" && <AdlQ sendCheck = {this.getCheckAdl} />} 
					{this.state.clickedCatName == "Attachment" && <AttachmentQ/>}  
					{this.state.clickedCatName == "Attention" && <AttentionQ/>}
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