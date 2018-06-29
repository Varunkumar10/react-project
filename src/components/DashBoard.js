import React, { Component } from "react";
import '../App.css';
import NewUser from './NewUser';

class DashBoard extends Component{
	render() {
		return(
			<div>
      	<NewUser />
			</div>
		);
	}
}

export default DashBoard;