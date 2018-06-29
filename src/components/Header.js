import React, { Component } from "react";
import '../App.css';
import Pagination from './Pagination';

class Header extends Component{
	constructor(props){
		super(props);
    this.state = {
			name: "LoginPage"
		};
	}	

  handleMenuClick = (eve) => {
  	eve.preventDefault();
    this.setState({
      name: eve.target.text
    });
	}

	render() {
		return(
			<div className="head">
				<h2>{this.state.name}</h2>	
				<Pagination onMenuClick={this.handleMenuClick} />
			</div>
		);
	}
}

export default Header;