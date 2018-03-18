import React, { Component } from 'react'
import '../main.css'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class ThoughtQ extends Component {
	constructor(props) {
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
					Does the client encounter any difficulties in concentrating?
	        <Radio q_ID = {"q_129"} txt = {"Yes"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_129-Yes")}/>
	        <Radio q_ID = {"q_129"} txt = {"No"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_129-No")}/> 
	        <Radio q_ID = {"q_129"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_129-Not enough information")}/>
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client demonstrate any signs of overthinking? (E.g. flight of ideas, over conscientiousness)
	      	<Radio q_ID = {"q_130"} txt = {"Yes"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_130-Yes")}/>
	        <Radio q_ID = {"q_130"} txt = {"No"} name = "2" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_130-No")}/> 
	        <Radio q_ID = {"q_130"} txt = {"Not enough information"} sendValue = {this.myRadio}
	        	status = {radioSet.has("q_130-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
		      Does the client have any abnormal thoughts or perceptions about money?  (E.g. hoarding money for future 
		      	catastrophes)
		      <Radio q_ID = {"q_131"} txt = {"Yes"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_131-Yes")}/>
		      <Radio q_ID = {"q_131"} txt = {"No"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_131-No")}/> 
		      <Radio q_ID = {"q_131"} txt = {"Not enough information"} name = "3" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_131-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client have too much negative thought compared to other people? (E.g.  holding negative beliefs, 
						earing grudges persistently)
					<Radio q_ID = {"q_132"} txt = {"Yes"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_132-Yes")}/>
		      <Radio q_ID = {"q_132"} txt = {"No"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_132-No")}/> 
		      <Radio q_ID = {"q_132"} txt = {"Not enough information"} name = "4" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_132-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Is the client preoccupied with concerns about physical health? (E.g. persistent thoughts about acquiring a
					 serious illness, recurrent thoughts of death)
					<Radio q_ID = {"q_133"} txt = {"Yes"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_133-Yes")}/>
		      <Radio q_ID = {"q_133"} txt = {"No"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_133-No")}/> 
		      <Radio q_ID = {"q_133"} txt = {"Not enough information"} name = "5" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_133-Not enough information")}/> 
	      </div>
	      <br/>
	      <div className = "questions">
					Does the client hold suspicious thoughts toward surroundings and other people? (E.g. doubts about the 
						loyalty of friends, reads hidden demeaning meanings into benign remarks)
		      <Radio q_ID = {"q_134"} txt = {"Yes"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_134-Yes")}/>
		      <Radio q_ID = {"q_134"} txt = {"No"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_134-No")}/> 
		      <Radio q_ID = {"q_134"} txt = {"Not enough information"} name = "6" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_134-Not enough information")}/> 
		    </div>
		    <br/>
		    <div className = "questions">
					Does the client encounter any difficulties in recalling or accepting the traumatic events occurred in the 
					past? (E.g. inability to remember important aspect of the traumatic events, flashbacks)
		      <Radio q_ID = {"q_135"} txt = {"Yes"} name = "7" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_135-Yes")}/>
		      <Radio q_ID = {"q_135"} txt = {"No"} name = "7" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_135-No")}/> 
		      <Radio q_ID = {"q_135"} txt = {"Not enough information"} name = "7" sendValue = {this.myRadio}
	        	status = {radioSet.has("q_135-Not enough information")}/> 
		    </div>
      </div>
		)
	}
}

export default ThoughtQ