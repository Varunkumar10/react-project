import React from "react";
import { Link } from 'react-router-dom';
import styles from '../App.css';


export const Pagination = () => (
		<div  className="nav">
			<ul>
			  <li><Link to='/'>Home</Link></li>
			  <li><Link to='/candidate'>DTM</Link></li>
			  <li><Link to='/content'>Story</Link></li>
			  <li><Link to='/meetandgreet1'>MG1</Link></li>
			  <li><Link to='/meetandgreet2'>MG2</Link></li>
			  <li><Link to='/boardplanone'>BP1</Link></li>
			  <li><Link to='/boardplantwo'>BP2</Link></li>
			</ul>	
		</div>
	)

export default Pagination;