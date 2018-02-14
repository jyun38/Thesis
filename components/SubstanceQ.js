import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class SubstanceQ extends Component {

	constructor(props){
		super(props);
	}

	countAll = () => {
 		console.log("Q2 Number of checkboxes chosen : ", $("input[value=2]:checkbox:checked").length);
 		console.log("Q3 Number of checkboxes chosen : ", $("input[value=3]:checkbox:checked").length);
 		console.log("Q4 Number of checkboxes chosen : ", $("input[value=4]:checkbox:checked").length);
	}

	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Which of the following substances the client has taken? (choose more than one if necessary)
					<Checkbox name = {"Cannabis"}/>
					<Checkbox name = {"Phencyclidine"}/>
					<Checkbox name = {"Sedative,hypnotic, or anxiolytic substance"}/>
					<Checkbox name = {"Alcohol"}/>
					<Checkbox name = {"Opioid"}/>
					<Checkbox name = {"Caffeine"}/>
					<Checkbox name = {"Hallucinogen"}/>
					<Checkbox name = {"Tobacco"}/>
					<Checkbox name = {"Inhalants"}/>
					<Checkbox name = {"Stimulants (in general)"}/>
					<Checkbox name = {"Others"}/>
				</div>
				<br/>   
				<div className = "questions">
					As a result of substance use, the client experienced or showed signs of : (choose more than one if necessary)
					<Checkbox value = "2" name = {"significant behavioral or psychological changes  (E.g. impaired motor coordination, anxiety,euphoria, inappropriate sexual behavior)"}/>
					<Checkbox value = "2" name = {"impairments or high potential of impairments in physical health"}/>
					<Checkbox value = "2" name = {"impairments in ability to fulfill his/her/their roles at work, school, or home"}/>
					<Checkbox value = "2" name = {"anxiety or fear"}/>
					<Checkbox value = "2" name = {"giving up of any social, occupational, or recreational activities"}/>					
				</div>
				<br/>
				<div className = "questions">
					The client experienced ___ in the process of withdrawing from substance use: (choose more than one if necessary)
					<Checkbox value = "3" name = {"anxiety or fear"}/>
					<Checkbox value = "3" name = {"difficulties"}/>
				</div>
				<br/>
				<div className = "questions">
					The client shows addictive behavior related to substance use such as: (choose more than one if necessary)
					<Checkbox value = "4" name = {"spending a great deal of time in the process of obtaining substance, using substance, or recovering from its effects"}/>
					<Checkbox value = "4" name = {"continuing to use the substance even his/her/their interpersonal relationships have been damaged as a result of  substance intoxication"}/>
					<Checkbox value = "4" name = {"addiction to certain substances ( E.g. strong desire to use the substance, diminished effect with continued use of same amount of the substance, unsuccessful efforts to control the substance use)"}/>
				</div>
				<button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}


}

export default SubstanceQ