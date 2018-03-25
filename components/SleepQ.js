import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class SleepQ extends Component {

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
			this.setState({
				radioIDs: arr
			});
		}
  }

  myAnswer = () => {
		//send clicked Q_ID to App
		this.props.sendQ_ID(this.state.checkedIDs);
		this.props.sendRadio_ID(this.state.radioIDs);
	}  

 	render() {
 		var radioSet = new Set(this.props.backRadio_ID);

		return(
			<div className = "questionsCon">
				<div className = "questions">
					<div className = "questionText">
					Does the client have fatigue, drowsiness, or coma?
					</div>
					<Radio q_ID = {"q_85"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_85-Yes")}/>
	        <Radio q_ID = {"q_85"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_85-No")}/> 
	        <Radio q_ID = {"q_85"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_85-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
	      	Does the client feel disturbed while sleeping? (E.g. awakening from sleep, snoring, breathing pauses during
	      	 sleep, having nightmares)
	      	</div>
	      	<Radio q_ID = {"q_86"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_86-Yes")}/>
	        <Radio q_ID = {"q_86"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_86-No")}/> 
	        <Radio q_ID = {"q_86"} txt = {"Not enough information"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_86-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client experience irrepressible need to sleep? (hypersomnia)
		      </div>
		      <Radio q_ID = {"q_87"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_87-Yes")}/>
		      <Radio q_ID = {"q_87"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_87-No")}/> 
		      <Radio q_ID = {"q_87"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_87-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have trouble falling asleep? (E.g. insomnia, disturbing dreams)
					</div>
					<Radio q_ID = {"q_88"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_88-Yes")}/>
		      <Radio q_ID = {"q_88"} txt = {"No"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_88-No")}/> 
		      <Radio q_ID = {"q_88"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_88-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have decreased need for sleep?
					</div>
					<Radio q_ID = {"q_89"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_89-Yes")}/>
		      <Radio q_ID = {"q_89"} txt = {"No"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_89-No")}/> 
		      <Radio q_ID = {"q_89"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_89-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
		      Does the client sleepwalk or show any other complex motor or vocal behaviors while sleeping?
		      </div>
		      <Radio q_ID = {"q_90"} txt = {"Yes"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_90-Yes")}/>
		      <Radio q_ID = {"q_90"} txt = {"No"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_90-No")}/> 
		      <Radio q_ID = {"q_90"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_90-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
	      	Does the client have abnormal intervals for REM (Rapid Eye Movement)?
	      	</div>
	      	<Radio q_ID = {"q_91"} txt = {"Yes"} name = "7" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_91-Yes")}/>
		      <Radio q_ID = {"q_91"} txt = {"No"} name = "7" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_91-No")}/> 
		      <Radio q_ID = {"q_91"} txt = {"Not enough information"} name = "7" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_91-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
	      	<div className = "questionText">
					Does the client have distress or impairment in functioning? 
					</div>
	      	<Radio q_ID = {"q_92"} txt = {"Yes"} name = "8" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_92-Yes")}/>
		      <Radio q_ID = {"q_92"} txt = {"No"} name = "8" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_92-No")}/> 
		      <Radio q_ID = {"q_92"} txt = {"Not enough information"} name = "8" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_92-Not enough information")}/> 
	      </div>
      </div>

		)
	}
}


export default SleepQ