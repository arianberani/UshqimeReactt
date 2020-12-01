import {Link} from 'react-router-dom'
import React from 'react'
import './header.css'

 function Header() {

	return (
		
		<nav class="navbar navbar-expand-lg navbar-light bg-light ">
			<div className="container">	
				<Link  className="log-text" to="/" > Ushqimet </Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 							aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-item nav-link" to="/"> Home</Link>
					</div>
				</div>
			</div>
		</nav>	
	);
	
}
export default Header