import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class SubstanceQ extends Component {

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

	render = () => {
		// set of all IDs
		var idSet = new Set(this.props.chosen_ID);
		// set of all radio IDs
		var radioSet = new Set(this.props.backRadio_ID);
		return(
			<div className = "questionsCon">
				<div className = "questions">
					<div className = "questionText">
					Which of the following substances the client has taken? (choose more than one if necessary)
					</div>
					<Checkbox q_ID = {"q_109"} name = {"Cannabis"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_109")}/>
					<Checkbox q_ID = {"q_110"} name = {"Phencyclidine"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_110")}/>
					<Checkbox q_ID = {"q_111"} name = {"Sedative,hypnotic, or anxiolytic substance"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_111")}/>
					<Checkbox q_ID = {"q_112"} name = {"Alcohol"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_112")}/>
					<Checkbox q_ID = {"q_113"} name = {"Opioid"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_113")}/>
					<Checkbox q_ID = {"q_114"} name = {"Caffeine"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_114")}/>
					<Checkbox q_ID = {"q_115"} name = {"Hallucinogen"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_115")}/>
					<Checkbox q_ID = {"q_116"} name = {"Tobacco"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_116")}/>
					<Checkbox q_ID = {"q_117"} name = {"Inhalants"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_117")}/>
					<Checkbox q_ID = {"q_118"} name = {"Stimulants (in general)"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_118")}/>
					<Checkbox q_ID = {"q_119"} name = {"Others"}
						callBackFromParent = {this.myCallBack} status = {idSet.has("q_119")}/>
				</div>
				<br/>   
				<div className = "questions">
					<div className = "questionText">
					Does the client demonstrate any signs of addiction to certain substances? ( E.g. strong desire to use the substance, diminished effect with continued use of same amount of the substance, unsuccessful efforts to control the substance use)
					</div>
					<Radio q_ID = {"q_120"} txt = {"Yes"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_120-Yes")}/>
		      <Radio q_ID = {"q_120"} txt = {"No"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_120-No")}/> 
		      <Radio q_ID = {"q_120"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_120-Not enough information")}/> 				
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Has the client experienced any significant behavioral or psychological changes following the substance use? (E.g. impaired motor coordination, anxiety,euphoria, inappropriate sexual behavior)
					</div>
					<Radio q_ID = {"q_121"} txt = {"Yes"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_121-Yes")}/>
		      <Radio q_ID = {"q_121"} txt = {"No"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_121-No")}/> 
		      <Radio q_ID = {"q_121"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_121-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Has the client experienced any anxiety or fear during or soon after substance intoxication or withdrawal? 
					</div>
					<Radio q_ID = {"q_122"} txt = {"Yes"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_122-Yes")}/>
		      <Radio q_ID = {"q_122"} txt = {"No"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_122-No")}/> 
		      <Radio q_ID = {"q_122"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_122-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Does the client have any impairments or high potential of impairments in physical health due to the use of substance? 
					</div>
					<Radio q_ID = {"q_123"} txt = {"Yes"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_123-Yes")}/>
		      <Radio q_ID = {"q_123"} txt = {"No"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_123-No")}/> 
		      <Radio q_ID = {"q_123"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_123-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Does the client experience extreme intake of substance?
					</div>
					<Radio q_ID = {"q_124"} txt = {"Yes"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_124-Yes")}/>
		      <Radio q_ID = {"q_124"} txt = {"No"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_124-No")}/> 
		      <Radio q_ID = {"q_124"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_124-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Has the client given up any social, occupational, or recreational activities due to the substance use?
					</div>
					<Radio q_ID = {"q_125"} txt = {"Yes"} name = "7" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_125-Yes")}/>
		      <Radio q_ID = {"q_125"} txt = {"No"} name = "7" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_125-No")}/> 
		      <Radio q_ID = {"q_125"} txt = {"Not enough information"} name = "7" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_125-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Does the client spend a great deal of time in the process of obtaining substance, using substance, or recovering from its effects? 
					</div>
					<Radio q_ID = {"q_126"} txt = {"Yes"} name = "8" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_126-Yes")}/>
		      <Radio q_ID = {"q_126"} txt = {"No"} name = "8" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_126-No")}/> 
		      <Radio q_ID = {"q_126"} txt = {"Not enough information"} name = "8" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_126-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Does the substance use influence the client’s ability to fulfill his/her/their roles at work, school, or home?
					</div>
					<Radio q_ID = {"q_127"} txt = {"Yes"} name = "9" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_127-Yes")}/>
		      <Radio q_ID = {"q_127"} txt = {"No"} name = "9" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_127-No")}/> 
		      <Radio q_ID = {"q_127"} txt = {"Not enough information"} name = "9" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_127-Not enough information")}/> 
				</div>
				<br/>
				<div className = "questions">
					<div className = "questionText">
					Does the client encounter any difficulties in the process of withdrawing from substance use?	
					</div>				
					<Radio q_ID = {"q_128"} txt = {"Yes"} name = "10" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_128-Yes")}/>
		      <Radio q_ID = {"q_128"} txt = {"No"} name = "10" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_128-No")}/> 
		      <Radio q_ID = {"q_128"} txt = {"Not enough information"} name = "10" sendValue = {this.myRadio} 
	        	status = {radioSet.has("q_128-Not enough information")}/> 
				</div>
			</div>
		)
	}


}

export default SubstanceQ