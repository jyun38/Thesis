import React, { Component } from 'react'
import '../main.css'
import CatList from './CatList.js'
import $ from 'jquery';


class IconButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickedDomain: null, 
			onClicked: false
			// color_black: true
			// bgColor: '#82D8E5'
		}
		// console.log(this.props);
	}

	myClick = () => {
		// this.props.onButtonClick();
		// this.changeColor();
		this.setState({
			onClicked: true
		})
		this.props.sendDomain(this.props.name);
	}

	render() {
		var _style;
		if(this.state.onClicked){
			_style = {
				color: "red"
			}
		}
		else{
			_style = {
				color: "blue"
			}
		}


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
				 	<button className = "button" style = {_style} onClick={this.myClick}>
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