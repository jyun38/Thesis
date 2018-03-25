import React, { Component } from 'react'
import '../main.css'
import Question from './Question.js'
import Radio from './Radio.js'
import $ from 'jquery'; 

var CATIDS = [];
var arr = {};

class ImpulseQ extends Component {
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

  render = () => {
    var radioSet = new Set(this.props.backRadio_ID);

  	return(
  		<div className = "questionsCon">
  			<div className = "questions">
          <div className = "questionText">
  				Does the client encounter any difficulties with impulse control? (E.g. stealing and deception without 
  					obvious external rewards, harming others or oneself, binge eating, substance abuse)
          </div>
  				<Radio q_ID = {"q_62"} txt = {"Yes"} name = "1" sendValue = {this.myRadio} 
            status = {radioSet.has("q_62-Yes")}/>
	        <Radio q_ID = {"q_62"} txt = {"No"} name = "1" sendValue = {this.myRadio} 
            status = {radioSet.has("q_62-No")}/> 
	        <Radio q_ID = {"q_62"} txt = {"Not enough information"} name = "1" sendValue = {this.myRadio} 
            status = {radioSet.has("q_62-Not enough information")}/>
  			</div>
  		</div>
  	)
  }
}

export default ImpulseQ