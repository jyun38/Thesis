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

var totalRadio = [];
var adl = new Set();
var adlRadio = new Set();

var attachment = new Set();
var attachmentRadio = new Set();

var att = new Set();
var attRadio = new Set();

var behavior = new Set();
var behaviorRadio = new Set();

var cogdev = new Set();
var cogdevRadio = new Set();

var communication = new Set();
var communicationRadio = new Set();

var delhal = new Set();
var delhalRadio = new Set();

var detachment = new Set();
var detachmentRadio = new Set();

var eating = new Set();
var eatingRadio = new Set();

var feeling = new Set();
var feelingRadio = new Set();

var iho = new Set();
var ihoRadio = new Set();

var impulse = new Set();
var impulseRadio = new Set();

var judgment = new Set();
var judgmentRadio = new Set();

var motor = new Set();
var motorRadio = new Set();

var orientation = new Set();
var orientationRadio = new Set();

var risk = new Set();
var riskRadio = new Set();

var ritual = new Set();
var ritualRadio = new Set();

var selfconcept = new Set();
var selfconceptRadio = new Set();

var selfharm = new Set();
var selfharmRadio = new Set();

var sensory = new Set();
var sensoryRadio = new Set();

var sleep = new Set();
var sleepRadio = new Set();

var somatic = new Set();
var somaticRadio = new Set();

var substance = new Set();
var substanceRadio = new Set();

var thought = new Set();
var thoughtRadio = new Set();

var brainIDS = [];

class CatList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickedCatName: null,
			allClickedIDs: null,
			clickedRadioIDs: null
		};
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
	getmyQ_ID = (dataFromChild) => {
		if(dataFromChild != null){

			if(this.state.clickedCatName == "Activities of Daily Living"){
				adl = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Attachment"){
				attachment = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Attention"){
				att = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Behavior"){
				behavior = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Cognitive Development"){
				cogdev = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Communication"){
				communication = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Delusion/Hallucination"){
				delhal = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Detachment"){
				detachment = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Eating"){
				eating = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Feeling"){
				feeling = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Impulse"){
				impulse = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Inflicting Harm on Others"){
				iho = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Judgment"){
				judgment = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Motor"){
				motor = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Orientation"){
				orientation = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Risk"){
				risk = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Ritual"){
				ritual = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Self-concept"){
				selfconcept = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Self-harm"){
				selfharm = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Sensory"){
				sensory = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Sleep"){
				sleep = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Somatic"){
				somatic = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Substance"){
				substance = new Set(dataFromChild);
			}
			else if(this.state.clickedCatName == "Thought"){
				thought = new Set(dataFromChild);
			}

			var brainArray = [];
			brainArray.push(adl, att, behavior, cogdev, communication, delhal, impulse, judgment, orientation, thought);
			
			var emotionArray = [];
			emotionArray.push(attachment, delhal, detachment, feeling, impulse, selfconcept, selfharm);

			var bodyArray = [];
			bodyArray.push(adl, eating, motor, ritual, sensory, sleep, somatic, substance);

			var socialArray = [];
			socialArray.push(adl, attachment, communication, iho, selfconcept);

			var actionsArray = [];
			actionsArray.push(adl, behavior, impulse, risk, ritual, selfharm, substance);

			var total = new Set();
			for(var i=0; i<brainArray.length; i++){
				for(let elem of brainArray[i]){
					total.add(elem);
				}
			}
			for(var i=0; i<emotionArray.length; i++){
				for(let elem of emotionArray[i]){
					total.add(elem);
				}
			}
			for(var i=0; i<bodyArray.length; i++){
				for(let elem of bodyArray[i]){
					total.add(elem);
				}
			}
			for(var i=0; i<socialArray.length; i++){
				for(let elem of socialArray[i]){
					total.add(elem);
				}
			}
			for(var i=0; i<actionsArray.length; i++){
				for(let elem of actionsArray[i]){
					total.add(elem);
				}
			}
			this.setState({
				allClickedIDs: Array.from(total)
			})
		}
	}

	radioIDs = (data) => {
		if(data != null){
			if(this.state.clickedCatName == "Activities of Daily Living"){
				adlRadio = data;
			}
			else if(this.state.clickedCatName == "Attachment"){
				attachmentRadio = data;
			}
			else if(this.state.clickedCatName == "Attention"){
				attRadio = data;
			}
			else if(this.state.clickedCatName == "Behavior"){
				behaviorRadio = data;
			}
			else if(this.state.clickedCatName == "Cognitive Development"){
				cogdevRadio = data; 
			}
			else if(this.state.clickedCatName == "Communication"){
				communicationRadio = data; 
			}
			else if(this.state.clickedCatName == "Delusion/Hallucination"){
				delhalRadio = data;
			}
			else if(this.state.clickedCatName == "Detachment"){
				detachmentRadio = data;
			}
			else if(this.state.clickedCatName == "Eating"){
				eatingRadio = data;
			}
			else if(this.state.clickedCatName == "Feeling"){
				feelingRadio = data;
			}
			else if(this.state.clickedCatName == "Inflicting Harm on Others"){
				ihoRadio = data;
			}
			else if(this.state.clickedCatName == "Impulse"){
				impulseRadio = data;
			}
			else if(this.state.clickedCatName == "Judgment"){
				judgmentRadio = data;
			}
			else if(this.state.clickedCatName == "Motor"){
				motorRadio = data;
			}
			else if(this.state.clickedCatName == "Orientation"){
				orientationRadio = data;
			}
			else if(this.state.clickedCatName == "Risk"){
				riskRadio = data;
			}
			else if(this.state.clickedCatName == "Ritual"){
				ritualRadio = data;
			}
			else if(this.state.clickedCatName == "Self-concept"){
				selfconceptRadio = data;
			}
			else if(this.state.clickedCatName == "Self-harm"){
				selfharmRadio = data;
			}
			else if(this.state.clickedCatName == "Sensory"){
				sensoryRadio = data;
			}
			else if(this.state.clickedCatName == "Sleep"){
				sleepRadio = data;
			}
			else if(this.state.clickedCatName == "Somatic"){
				somaticRadio = data;
			}
			else if(this.state.clickedCatName == "Substance"){
				substanceRadio = data;
			}
			else if(this.state.clickedCatName == "Thought"){
				thoughtRadio = data;
			}

			var myRadioArray = [];
			myRadioArray.push(adlRadio, attachmentRadio, attRadio, behaviorRadio, cogdevRadio, communicationRadio, 
				delhalRadio, detachmentRadio, eatingRadio, feelingRadio, ihoRadio, impulseRadio, judgmentRadio, motorRadio, 
				orientationRadio, riskRadio, ritualRadio, selfconceptRadio, selfharmRadio, sensoryRadio, sleepRadio, somaticRadio, 
				substanceRadio, thoughtRadio);

			var totalRadioQs = new Set();
			for(var i = 0; i<myRadioArray.length; i++){
				for(let key in myRadioArray[i]){
					totalRadioQs.add(key+"-"+myRadioArray[i][key]);
				}
			}
			// put all the clicked radio IDs into clickedRadioIDs state
			this.setState({
				clickedRadioIDs: Array.from(totalRadioQs)
			})

			totalRadio = Array.from(totalRadioQs);
		}
	}
	// pass clicked Q_ID to app
	myFunc = () => {
		this.props.sendDomain(this.state.allClickedIDs);
	}

	render() {
		var categoriesList; 
		// array containing all clicked adl IDs
		var allAdl = Array.from(adl);
		var allAttachment = Array.from(attachment); 
		var allAtt = Array.from(att);
		var allBehavior = Array.from(behavior);
		var allCogdev = Array.from(cogdev);
		var allCommunication = Array.from(communication);
		var allDelhal = Array.from(delhal);
		var allDetachment = Array.from(detachment);
		var allEating = Array.from(eating);
		var allFeeling = Array.from(feeling);
		var allIho = Array.from(iho);
		var allImpulse = Array.from(impulse);
		var allJudgment = Array.from(judgment);
		var allMotor = Array.from(motor);
		var allOrientation = Array.from(orientation);
		var allRisk = Array.from(risk);
		var allRitual = Array.from(ritual);
		var allSelfconcept = Array.from(selfconcept);
		var allSelfharm = Array.from(selfharm);
		var allSensory = Array.from(sensory);
		var allSleep = Array.from(sleep);
		var allSomatic = Array.from(somatic);
		var allSubstance = Array.from(substance);
		var allThought = Array.from(thought);

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

		return(	
			<div>
				<div className = "categoriesCon">
					{categoriesList.map((x, i) => 
						<Category name = {x} key = {i} sendCat = {this.getCat}/>)	
					}
				</div>
	
				<div>
					{this.state.clickedCatName == "Activities of Daily Living" && 
						<AdlQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allAdl} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>} 
					{this.state.clickedCatName == "Attachment" && 
						<AttachmentQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allAttachment} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}  
					{this.state.clickedCatName == "Attention" && 
						<AttentionQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allAtt} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Behavior" && 
						<BehaviorQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allBehavior} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Cognitive Development" && 
						<CogDevQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allCogdev} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Communication" && 
						<CommunicationQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allCommunication} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Delusion/Hallucination" && 
						<DelHalQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allDelhal} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Detachment" && 
						<DetachmentQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allDetachment} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Eating" && 
						<EatingQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allEating} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Feeling" && 
						<FeelingQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allFeeling} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Inflicting Harm on Others" && 
						<IhoQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allIho} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Impulse" && 
						<ImpulseQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allImpulse} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Judgment" && 
						<JudgmentQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allJudgment} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Motor" && 
						<MotorQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allMotor} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Orientation" && 
						<OrientationQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allOrientation} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Risk" && 
						<RiskQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allRisk} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Ritual" && 
						<RitualQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allRitual} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Self-concept" && 
						<SelfConceptQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allSelfconcept} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Self-harm" && 
						<SelfHarmQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allSelfharm} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Sensory" && 
						<SensoryQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allSensory} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Sleep" && 
						<SleepQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allSleep} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Somatic" && 
						<SomaticQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allSomatic} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Substance" && 
						<SubstanceQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allSubstance} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
					{this.state.clickedCatName == "Thought" && 
						<ThoughtQ sendQ_ID = {this.getmyQ_ID} chosen_ID = {allThought} sendRadio_ID = {this.radioIDs} 
							backRadio_ID = {totalRadio}/>}
				</div>
			
			</div>
			)
	 
	}	
}

export default CatList