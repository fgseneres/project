import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Hotel_Sidebar/home';
import Guest from './Hotel_Sidebar/guest';
import Rooms from './Hotel_Sidebar/rooms';
import Reservation from './Hotel_Sidebar/reservation';

const Pagenotfound = () => (
	<center><h3>Page Not Found</h3></center>
)

const Hotel = ({ match }) => (
	<div id="wrapper" className="toggled">
		<div id="sidebar-wrapper">
            <ul className="sidebar-nav">
            	<li className="sidebar-brand">Hotel Dashboard</li>
				<li className="sidebar-links"><Link to={`${match.url}/guest`}><i className="fa fa-group" aria-hidden="true"></i>Guest</Link></li>
				<li className="sidebar-links"><Link to={`${match.url}/rooms`}><i className="fa fa-bed" aria-hidden="true"></i>Rooms</Link></li>
				<li className="sidebar-links"><Link to={`${match.url}/reservation`}><i className="fa fa-book" aria-hidden="true"></i>Reservation</Link></li>
			</ul>
		</div>
		<div id="page-content-wrapper">
			<div className="container-fluid">
				<div className="row">
					<Switch>
						<Route path={`${match.url}/guest`} component={Guest} />
						<Route path={`${match.url}/rooms`} component={Rooms} />
						<Route path={`${match.url}/reservation`} component={Reservation} />
						<Route exact path={match.url} render={() =>( <Home /> )} />
						<Route component={Pagenotfound} />
					</Switch>
				</div>
			</div>
		</div>
	</div>
)
export default Hotel;