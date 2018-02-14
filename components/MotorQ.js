import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import $ from 'jquery'; 

class MotorQ extends Component {
	constructor(props) {
		super(props);
	}

	countAll = () => {
		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length);
	}
	
	render = () => {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					The client experiences: (choose more than one if necessary)
					<Checkbox name = {"excessive movement (E.g. vocal tics, psychomotor agitation, periods of inexhaustibility)"}/>
					<Checkbox name = {"lack of movement (E.g. psychomotor retardation, depressed reflexes, stupor)"}/>
					<Checkbox name = {"any disorganized, catatonic, or uncoordinated behavior"}/>
				</div>
	      <button onClick={this.countAll}>{"Done"}</button>
			</div>
		)
	}
}

export default MotorQ