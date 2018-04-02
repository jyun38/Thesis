import React, { Component } from 'react'
import '../main.css'
import Category from './Category.js'
import IconButton from './IconButton.js'
import CatList from './CatList.js'
import AdlQ from './AdlQ.js'
import ajax from 'jquery';
import $ from 'jquery';

var idData ="Please click the 'SUGGESTED SYMPTOMS' button for results."
var criteria = [];
var allIdSet = new Set();
var resultArr = [];
// var resultSet = new Set();

class App extends Component {
	constructor(){
		super();
    this.state = {
    	clickedDomain: null,
    	receivedQ_IDs: null,
    	result: null
    };
  } 

  extractData = () => { 
  	console.log("Getting data...");
	 	fetch('http://localhost:4000/res2')
	 		.then(response => {
	 			let rawData = response.json();
	 			rawData.then(function(value){
	 				if(typeof(value) != 'undefined' && value != null){

	 					if(value.table[0]!= null){
	 						value.table[0] = JSON.parse(value.table[0])
	 						// console.log(value.table[0]);
	 						idData = value.table[0];
	 						console.log("idData >>>");
	 						console.log(idData);
	 						resultArr=[];
	 					 	resultArr.push(idData.length.toString() + " possible diagnoses: " + "\n");
	 					 	// console.log(idData.length);
	 						for(var i=0; i<idData.length; i++){
	 							// resultArr.push(idData[i].code_ICD10);
	 							resultArr.push(idData[i].dx_name + " (" + idData[i].code_ICD10 + ")");
	 							resultArr.push("Chapter : " + idData[i].chapter_name + " (" +  idData[i].chapter + ")");
	 							// resultArr.push("URL : " + idData[i].URL);

	 							resultArr.push(idData[i].selectedNum + " symptom(s) out of " + idData[i].totalNum + " : " + idData[i].accuracy + "%");

	 							var criteriaData = idData[i].criteria.split("|"); 
	 							var criteriaResData = idData[i].criteriaRes.split("|"); 

	 							for(var x = 0 ; x < criteriaData.length; x++){
	 								var numFront = x+1; 
	 								resultArr.push(numFront.toString() + ". " + criteriaData[x] + " (" + criteriaResData[x] + ")");
	 							} 
	 							resultArr.push("\n");
	 						}
	 						resultArr = resultArr.join(" \n ");
	 					}
	 				}
	 			})
	 		})
	 		this.setState({
	 			result: resultArr
	 		});
 }

 	ajaxPost = () =>{
 		console.log("Sending IDs...");
 		var all_ID = [];
 		if(all_ID != null || all_ID.length != 0 ){
	 		all_ID.push(this.state.receivedQ_IDs);
	 		console.log("PRINT " + all_ID);
 		
 			$.ajax({
				url: '/res2',
				type: 'POST',
				data: {id: all_ID}
			});
 		}
 	}

	giveCat = (domainName) => {
		this.setState({ 
			clickedDomain: domainName 
		});
	}

	getQ_ID = (q_IDs) => {
		if(q_IDs != null){
			this.setState({
				receivedQ_IDs: JSON.stringify(q_IDs)
			})
		}
	}

	render() {
		return (
			<div>
				<div className = "domainsCon">
					<IconButton name = {"Brain"} sendDomain = {this.giveCat} status = {this.state.clickedDomain == "Brain"}/>
					<IconButton name = {"Emotion"} sendDomain = {this.giveCat} status = {this.state.clickedDomain == "Emotion"}/>
					<IconButton name = {"Body"} sendDomain = {this.giveCat} status = {this.state.clickedDomain == "Body"}/>
					<IconButton name = {"Social"} sendDomain = {this.giveCat} status = {this.state.clickedDomain == "Social"}/>
					<IconButton name = {"Actions"} sendDomain = {this.giveCat} status = {this.state.clickedDomain == "Actions"}/>
				</div> 
				<div>
					{this.state.clickedDomain == "Brain" && <CatList name = {"Brain"} sendDomain ={this.getQ_ID}/>}
					{this.state.clickedDomain == "Emotion" && <CatList name = {"Emotion"} sendDomain = {this.getQ_ID}/>}
					{this.state.clickedDomain == "Body" && <CatList name = {"Body"} sendDomain = {this.getQ_ID}/>}
					{this.state.clickedDomain == "Social" && <CatList name = {"Social"} sendDomain = {this.getQ_ID}/>}															
					{this.state.clickedDomain == "Actions" && <CatList name = {"Actions"} sendDomain = {this.getQ_ID}/>}
				</div>
				<div className = "resultCont">
					<button onClick={this.ajaxPost}>
						FINALIZE RESULTS
					</button>
					<button onClick={this.extractData}>
						QUERY DATABASE
					</button>
					<button onClick={this.extractData}>
						GET DIAGNOSES
					</button>
					
					<div className="result">
					{this.state.result}
						
					</div>
				</div>
			</div>
		)
	}
}
export default App