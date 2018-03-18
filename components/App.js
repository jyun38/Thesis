import React, { Component } from 'react'
import '../main.css'
import Category from './Category.js'
import IconButton from './IconButton.js'
import CatList from './CatList.js'
import AdlQ from './AdlQ.js'
import ajax from 'jquery';
import $ from 'jquery';

var idData ='';
var resultSet=[];
var brain = new Set();
var emotion = new Set();

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
	 						// idData = value.table[0];
	 						
	 						idData = value.table[0]
	 						// console.log(idData);
	 						// console.log(idData.length);
	 						resultSet=[];
	 						for(var i=0; i<idData.length; i++){
	 							resultSet.push(idData[i].symptom);
	 						}
	 						// resultSet.join("\r\n");
	 						// resultSet.join('\r\n');
	 						// console.log(typeof(resultSet));
	 						// console.log(typeof(value));
	 						// console.log(value);
	 					}
	 				}
	 			})
	 		})
	 		this.setState({
	 			result: JSON.stringify(idData)
	 		});
 }

 	ajaxPost = () =>{
 		console.log("Sending IDs...");
 		var all_ID = [];
 		all_ID.push(this.state.receivedQ_IDs);
 		console.log("PRINT " + all_ID);
 		if(all_ID != null){
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
			if(this.state.clickedDomain == "Brain"){
				brain = new Set(q_IDs);
				// urgh.push(q_IDs);
			}
			else if(this.state.clickedDomain == "Emotion"){
				emotion = new Set(q_IDs);
			}

			var totalQ_IDs = new Set();
			for(let elem of brain){
				totalQ_IDs.add(elem);
			}
			for(let elem of emotion){
				totalQ_IDs.add(elem);
			}

			this.setState({
				receivedQ_IDs: JSON.stringify(Array.from(totalQ_IDs))
			})
		}
	}


	render() {
		return (
			<div>
				<div className = "domainsCon">
					<IconButton name = {"Brain"} sendDomain = {this.giveCat}/>
					<IconButton name = {"Emotion"} sendDomain = {this.giveCat}/>
					<IconButton name = {"Body"} sendDomain = {this.giveCat}/>
					<IconButton name = {"Social"} sendDomain = {this.giveCat}/>
					<IconButton name = {"Actions"} sendDomain = {this.giveCat}/>
				</div> 
				<div>
					{this.state.clickedDomain == "Brain" && <CatList name = {"Brain"} sendDomain ={this.getQ_ID}/>}
					{this.state.clickedDomain == "Emotion" && <CatList name = {"Emotion"} sendDomain = {this.getQ_ID}/>}
					{this.state.clickedDomain == "Body" && <CatList name = {"Body"} sendDomain = {this.getQ_ID}/>}
					{this.state.clickedDomain == "Social" && <CatList name = {"Social"} sendDomain = {this.getQ_ID}/>}															
					{this.state.clickedDomain == "Actions" && <CatList name = {"Actions"} sendDomain = {this.getQ_ID}/>}
				</div>
				<div>
					<button onClick={this.ajaxPost}>
						FINALIZE ANSWERS
					</button>
					<button onClick={this.extractData}>
						QUERY DATABASE
					</button>
					<button onClick={this.extractData}>
						SHOW RESULT
					</button>

				</div>
				<div className="result">
					{this.state.result}
				</div>
			</div>
		)
	}
}
export default App