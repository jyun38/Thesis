import React, { Component } from 'react'
import '../main.css'
import CatList from './CatList.js'
import $ from 'jquery';


class IconButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickedDomain: null
		}
	}

	myClick = () => {
		
		this.props.sendDomain(this.props.name);
	}

	render() {
		var _style;
		var _iconStyle;
		if(this.props.status == true){
			_style = {
				color: "grey"
			}
			_iconStyle ={
				width:40,
				height:40 ,
				filter:"invert(0.7)"
			
				

			}
		}
		else{
			_style = {
				color: "#2C4087"
			}
			_iconStyle = {
				width:40,
				height:40 

  		}
		}
		return (
			<div>
				<div>
				 	<button className = "button" style = {_style} onClick={this.myClick}>
				 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					 	<img style = {_iconStyle} src={require(`../${this.props.name.toLowerCase()}.png`)}/>
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