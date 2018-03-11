import React, { Component } from 'react'
import '../main.css'
import Category from './Category.js'
import IconButton from './IconButton.js'
import CatList from './CatList.js'
import AdlQ from './AdlQ.js'
import ajax from 'jquery';
import $ from 'jquery';
var idData ='';
 
class App extends Component {
	constructor(){
		super();
    this.state = {
    	clickedDomain: null,
    	clickedQ_ID: null, 
    	another: '"q_3"',
    	result: null
    };
  }

  extractData = () => { 
  	console.log("extracting data");
	 	fetch('http://localhost:4000/res2')
	 		.then(response => {
	 			let rawData = response.json()
	 			rawData.then(function(value){
	 				console.log(typeof(value));
	 				if(typeof value != 'undefined' && value != null){
	 					if(value.table[0]!= null){
	 						idData = value.table[0][0].symptom
	 					}
	 				}
	 			})
	 		})
	 	this.setState({result: JSON.stringify(idData)});
 }

 	ajaxPost = () =>{
 		console.log("Sending ajax post");
 		var all_ID = [];
 		all_ID.push(this.state.clickedQ_ID);
 		all_ID.push(this.state.another);
 		// console.log("PRINT " + all_ID);
 		// console.log(typeof(trying));
 		// if(trying != null){
 		// 	console.log("element: " + trying[1])
 		// }
 		// console.log(trying[0]);
 		// console.log(this, this.state, this.state.clickedQ_ID);
		$.ajax({
		url: '/res2',
		type: 'POST',
		data: {id: all_ID}
		}).then(this.extractData());		
 	}

	giveCat = (domainName) => {
		this.setState({ 
			clickedDomain: domainName 
		});
	}

	getQ_ID = (q_ID) => {
		this.setState({
			clickedQ_ID: JSON.stringify(q_ID)
		})
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
					{this.state.clickedDomain == "Brain" && <CatList name = {"Brain"} callBackFromParent ={this.getQ_ID}/>}
					{this.state.clickedDomain == "Emotion" && <CatList name = {"Emotion"}/>}
					{this.state.clickedDomain == "Body" && <CatList name = {"Body"}/>}
					{this.state.clickedDomain == "Social" && <CatList name = {"Social"}/>}															
					{this.state.clickedDomain == "Actions" && <CatList name = {"Actions"}/>}
				</div>
				<div>
					<button onClick={this.ajaxPost}>
						Get diagnosis
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