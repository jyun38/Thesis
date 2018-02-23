import React, { Component } from 'react'
import '../main.css'
import CatList from './CatList.js'

class IconButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickedDomain: null
			// bgColor: '#82D8E5'
		}
		// console.log(this.props);
		}

	myClick = () => {
		// this.props.onButtonClick();
		this.props.sendDomain(this.props.name);
	}

	render() {
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