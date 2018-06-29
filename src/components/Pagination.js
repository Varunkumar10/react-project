import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Pagination = (props) => {
	return(
		<div className="nav">
			<ul>
				<li onClick={props.onMenuClick}><Link to='/'>LoginPage</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/home'>Home</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/dashboard'>DashBoard</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/candidate'>DTM</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/content'>Story</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/meetandgreetone'>MG1</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/meetandgreettwo'>MG2</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/boardplanone'>BP1</Link></li>
			  <li onClick={props.onMenuClick}><Link to='/boardplantwo'>BP2</Link></li>
			</ul>	
		</div>
	);	
}

export default Pagination;