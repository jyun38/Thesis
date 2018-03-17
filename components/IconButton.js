import React, { Component } from 'react'
import '../main.css'
import CatList from './CatList.js'

class IconButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickedDomain: null
			// color_black: true
			// bgColor: '#82D8E5'
		}
		// console.log(this.props);
	}

	// changeColor = () => {
	// 	this.setState({
	// 		color_black: !this.state.color_black
	// 	})
	// }
	myClick = () => {
		// this.props.onButtonClick();
		// this.changeColor();
		this.props.sendDomain(this.props.name);
	}

	render() {
		// let bgColor;
		// if(this.state.color_black){
		// 	bgColor = "#82D8E5"
		// }
		// else{
		// 	bgColor = "white"
		// }
		//style={{backgroundColor: bgColor}} 
		return (
			<div>
				<div>
				 	<button className = "button" onClick={this.myClick}>
				 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					 	<img style = {{width:40, height: 40}} src={require(`../${this.props.name.toLowerCase()}.png`)}/>
					 	<font size="+2">
					 	{this.props.name}
					 	</font> 
				 	</button> 
				 </div>
			</div>
		)
	}

}

export default IconButton