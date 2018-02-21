import React, { Component } from 'react'
import '../main.css'
import Checkbox from './Checkbox.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

class AdlQ extends Component {
	constructor(props){
		super(props);
		console.log(this.props);
		this.state = {
			question1Choice: null, 
			allQsAnswered: false
		}	
	}

	setQ1Answer = (e) => {
		this.setState({
			question1Choice: e.target.value
		});

		// return e.target.value
	}

 	countAll = () => {
 		// alert($("input:checkbox:checked").length);
 		// this.props.sendAdlChoice(this.setQ1Answer);
 		if(($("input:radio:checked").length > 0 ) && ($("input:checkbox:checked").length > 0 )) {
 			var questionsAnswered = true;
 		}
 		this.props.sendCheck(questionsAnswered);
 		console.log("question 1 : ", this.state.question1Choice);
 		console.log("Number of checkboxes chosen : ", $("input:checkbox:checked").length);
 	}

	render() {
		return(
			<div className = "questionsCon">
				<div className = "questions">
					Does the client use any mind-altering substances such as Cannabis, Hallucinogen, and Phencyclidine? <br/>
	        <Radio q_ID = {"q_1"} txt = {"Yes"} name = "1" onAnswer = {this.setQ1Answer}/>
	        <Radio q_ID = {"q_1"} txt = {"No"} name = "1" onAnswer = {this.setQ1Answer}/> 
	        <Radio q_ID = {"q_1"} txt = {"Not enough information"} name = "1" onAnswer = {this.setQ1Answer}/>
	      </div>
	      <br/>
	      <div className = "questions">
	      	The client encounters difficulties with: (choose more than one if necessary)<br/>
	        <Checkbox q_ID = {"q_2"} name = {"personal care, such as eating, dressing, elimination, and hygiene"}/>
	        <Checkbox q_ID = {"q_3"} name = {"making decisions"}/>
	        <Checkbox q_ID = {"q_4"} name = {"household tasks, such as taking care of children, grocery shopping, transportation, and money management"}/>	        	        	        
	        <Checkbox q_ID = {"q_5"} name = {"work, such as scheduling, organizing events, solving problems, and working with co-workers"}/>
	        <Checkbox q_ID = {"q_6"} name = {"with interacting and communicating with others"}/>
	        <Checkbox q_ID = {"q_7"} name = {"recreational activities, such as participating in outdoor activities, watching movies, and listening to music"}/>
	        <Checkbox q_ID = {"q_8"} name = {"academic functioning, such as memory, reasoning, and comprehension"}/>
	      </div>
	      <button onClick={this.countAll}>{"Done"}</button>
      </div>
		)
	}
}

export default AdlQ