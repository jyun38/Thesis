import React, { Component } from 'react'
import '../main.css'
import Category from './Category.js'
import IconButton from './IconButton.js'
import CatList from './CatList.js'
import AdlQ from './AdlQ.js'

class App extends Component {
	constructor(){
		super();
    this.state = {
    	clickedDomain: null,
    	clickedQ_ID: null
    };
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
		const q_Data = ["myId"]; 
		q_Data.push(this.state.clickedQ_ID);
		// console.log(q_Data);
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
			</div>
		)
	}
}
export default App