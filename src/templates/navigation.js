import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
	<nav className="navbar navbar-default navbar-fixed-top">
		<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<Link to="/hotel" className="navbar-brand">WebsiteName</Link>
			</div>
			<div className="collapse navbar-collapse" id="myNavbar">
				<ul className="nav navbar-nav">
					<li><Link to="/hotel">Hotel</Link></li>
					<li><Link to="/restaurant">Restaurant</Link></li>
					<li><Link to="/accounting">Accounting</Link></li>
				</ul>
				<ul className="nav navbar-nav navbar-right">
					<li><Link to="/hotel">Administrator</Link></li>
				</ul>
			</div>
		</div>
	</nav>
)
export default Navigation;