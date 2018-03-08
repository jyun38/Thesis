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
    	clickedQ_ID: 'attachment', 
    	result: ''
    };
  }

   extractData = () => { 
 	fetch('http://localhost:4000/res2')
 		.then(response => {
 			let rawData = response.json()
 			rawData.then(function(value){
 				if(typeof value != 'undefined'){
 					idData = value.table[0][0].from_ID
 				}
 			})
 		})
 		this.setState({result:idData});
 }

	componentDidMount = () => {
		$.ajax({
	    url: '/res2',
	    type: 'POST',
	    data: {id: this.state.clickedQ_ID}
	  });

		setInterval(() => 
			this.extractData(), 1000
		// fetch("http://localhost:4000/res2")
		// 	.then(response => {
		// 				let rawData = response.json(); 
		// 		 		rawData.then(function(value){
		// 		 			if(typeof value != 'undefined'){
		// 		 				idData = value.table[0][0].from_ID
		// 		 			}
				 			
		// 		 		})
		// 	}),
  //    	1000
      );
	}


 
	giveCat = (domainName) => {
		this.setState({ 
			clickedDomain: domainName 
		});
	}

	getQ_ID = (q_ID) => {
		this.setState({
			clickedQ_ID: q_ID
		})
	}

	render() {
		// var q_Data = ["HIIIIIII"]; 
		// q_Data.push(this.state.clickedQ_ID);
		// var myData = JSON.stringify(q_Data);
	        
	 //  console.log('React id  : ' + q_Data);
		// // console.log(q_Data);
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
					<text> {this.state.result} </text> 
				</div>
			</div>
		)
	}
}
export default App