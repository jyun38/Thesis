import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SubstanceQ extends Component {

	constructor(props) {
		super(props);
		this.state = {
			question2Choice: null,
			question3Choice: null,
			question4Choice: null,
			question5Choice: null,
			question6Choice: null,
			question7Choice: null,
			question8Choice: null,
			question9Choice: null,
			question10Choice: null
		}
	}

	setQ2Answer = (e) => {
		this.setState({
			question2Choice: e.target.value
		});
	}

	setQ3Answer = (e) => {
		this.setState({
			question3Choice: e.target.value
		});
	}

	setQ4Answer = (e) => {
		this.setState({
			question4Choice: e.target.value
		});
	}

	setQ5Answer = (e) => {
		this.setState({
			question5Choice: e.target.value
		});
	}

	setQ6Answer = (e) => {
		this.setState({
			question6Choice: e.target.value
		});
	}

	setQ7Answer = (e) => {
		this.setState({
			question7Choice: e.target.value
		});
	}

	setQ8Answer = (e) => {
		this.setState({
			question8Choice: e.target.value
		});
	}

	setQ9Answer = (e) => {
		this.setState({
			question9Choice: e.target.value
		});
	}

	setQ10Answer = (e) => {
		this.setState({
			question10Choice: e.target.value
		});
	}	



	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Which of the following substances the client has taken? (choose more than one if necessary)
					<Checkbox q_ID = {"q_109"} name = {"Cannabis"}/>
					<Checkbox q_ID = {"q_110"} name = {"Phencyclidine"}/>
					<Checkbox q_ID = {"q_111"} name = {"Sedative,hypnotic, or anxiolytic substance"}/>
					<Checkbox q_ID = {"q_112"} name = {"Alcohol"}/>
					<Checkbox q_ID = {"q_113"} name = {"Opioid"}/>
					<Checkbox q_ID = {"q_114"} name = {"Caffeine"}/>
					<Checkbox q_ID = {"q_115"} name = {"Hallucinogen"}/>
					<Checkbox q_ID = {"q_116"} name = {"Tobacco"}/>
					<Checkbox q_ID = {"q_117"} name = {"Inhalants"}/>
					<Checkbox q_ID = {"q_118"} name = {"Stimulants (in general)"}/>
					<Checkbox q_ID = {"q_119"} name = {"Others"}/>
				</div>
				<br/>   
				<div className = "questions">
					Does the client demonstrate any signs of addiction to certain substances? ( E.g. strong desire to use the substance, diminished effect with continued use of same amount of the substance, unsuccessful efforts to control the substance use)
					<Radio q_ID = {"q_120"} txt = {"Yes"} name = "2" onAnswer = {this.setQ2Answer}/>
		      <Radio q_ID = {"q_120"} txt = {"No"} name = "2" onAnswer = {this.setQ2Answer}/> 
		      <Radio q_ID = {"q_120"} txt = {"Not enough information"} name = "2" onAnswer = {this.setQ2Answer}/> 				
				</div>
				<br/>
				<div className = "questions">
					Has the client experienced any significant behavioral or psychological changes following the substance use? (E.g. impaired motor coordination, anxiety,euphoria, inappropriate sexual behavior)
					<Radio q_ID = {"q_121"} txt = {"Yes"} name = "3" onAnswer = {this.setQ3Answer}/>
		      <Radio q_ID = {"q_121"} txt = {"No"} name = "3" onAnswer = {this.setQ3Answer}/> 
		      <Radio q_ID = {"q_121"} txt = {"Not enough information"} name = "3" onAnswer = {this.setQ3Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Has the client experienced any anxiety or fear during or soon after substance intoxication or withdrawal? 
					<Radio q_ID = {"q_122"} txt = {"Yes"} name = "4" onAnswer = {this.setQ4Answer}/>
		      <Radio q_ID = {"q_122"} txt = {"No"} name = "4" onAnswer = {this.setQ4Answer}/> 
		      <Radio q_ID = {"q_122"} txt = {"Not enough information"} name = "4" onAnswer = {this.setQ4Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Does the client have any impairments or high potential of impairments in physical health due to the use of substance? 
					<Radio q_ID = {"q_123"} txt = {"Yes"} name = "5" onAnswer = {this.setQ5Answer}/>
		      <Radio q_ID = {"q_123"} txt = {"No"} name = "5" onAnswer = {this.setQ5Answer}/> 
		      <Radio q_ID = {"q_123"} txt = {"Not enough information"} name = "5" onAnswer = {this.setQ5Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Does the client experience extreme intake of substance?
					<Radio q_ID = {"q_124"} txt = {"Yes"} name = "6" onAnswer = {this.setQ6Answer}/>
		      <Radio q_ID = {"q_124"} txt = {"No"} name = "6" onAnswer = {this.setQ6Answer}/> 
		      <Radio q_ID = {"q_124"} txt = {"Not enough information"} name = "6" onAnswer = {this.setQ6Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Has the client given up any social, occupational, or recreational activities due to the substance use?
					<Radio q_ID = {"q_125"} txt = {"Yes"} name = "7" onAnswer = {this.setQ7Answer}/>
		      <Radio q_ID = {"q_125"} txt = {"No"} name = "7" onAnswer = {this.setQ7Answer}/> 
		      <Radio q_ID = {"q_125"} txt = {"Not enough information"} name = "7" onAnswer = {this.setQ7Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Does the client spend a great deal of time in the process of obtaining substance, using substance, or recovering from its effects? 
					<Radio q_ID = {"q_126"} txt = {"Yes"} name = "8" onAnswer = {this.setQ8Answer}/>
		      <Radio q_ID = {"q_126"} txt = {"No"} name = "8" onAnswer = {this.setQ8Answer}/> 
		      <Radio q_ID = {"q_126"} txt = {"Not enough information"} name = "8" onAnswer = {this.setQ8Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Does the substance use influence the client’s ability to fulfill his/her/their roles at work, school, or home?
					<Radio q_ID = {"q_127"} txt = {"Yes"} name = "9" onAnswer = {this.setQ9Answer}/>
		      <Radio q_ID = {"q_127"} txt = {"No"} name = "9" onAnswer = {this.setQ9Answer}/> 
		      <Radio q_ID = {"q_127"} txt = {"Not enough information"} name = "9" onAnswer = {this.setQ9Answer}/> 
				</div>
				<br/>
				<div className = "questions">
					Does the client encounter any difficulties in the process of withdrawing from substance use?					
					<Radio q_ID = {"q_128"} txt = {"Yes"} name = "10" onAnswer = {this.setQ10Answer}/>
		      <Radio q_ID = {"q_128"} txt = {"No"} name = "10" onAnswer = {this.setQ10Answer}/> 
		      <Radio q_ID = {"q_128"} txt = {"Not enough information"} name = "10" onAnswer = {this.setQ10Answer}/> 
				</div>
				<button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}


}

export default SubstanceQ