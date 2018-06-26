import React from "react";
import styles from '../App.css';

export class Header extends React.Component{
	render() {
		return(
			<div className={styles.head} >
				<section className={styles.headOne}>
					<h2>Qualifying for Dropping The Message (DTM)</h2>				  
				</section>
			</div>
		);
	}
}