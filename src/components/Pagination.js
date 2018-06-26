import React from "react";
import { Link } from 'react-router-dom';

export const Pagination =() =>(
		<div>
			<ul>
			  <li><Link to='/Home'>Home</Link></li>
			  <li><Link to='/candidate'>1</Link></li>
			  <li><Link to='/content'>2</Link></li>
			  <li><Link to='/meetandgreet1'>3</Link></li>
			</ul>  
		</div>
	)

export default Pagination;