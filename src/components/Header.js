import React from "react";
import styles from '../App.css';
import { Pagination } from './Pagination';

export class Header extends React.Component{
	constructor(){
		super();
		this.state = {
			name: "Home"
		}
	}
	render() {
		return(
			<div className="head">
				<h2>{this.state.name}</h2>	
				<Pagination handleHeader={this.handlePage}/>
			</div>
		);
	}
}