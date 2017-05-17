import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './templates/navigation'
import Hotel from './views/Hotel';
import Restaurant from './views/Restaurant';
import Accounting from './views/Accounting';

const Pagenotfound = () => (
	<center><h3>Page Not Found</h3></center>
)

const Routes = () => (
	<Router>
		<div>
			<Navigation />
			<Switch>
			<Route path="/hotel" component={Hotel} />
			<Route path="/restaurant" component={Restaurant} />
			<Route path="/accounting" component={Accounting} />
			<Route component={Pagenotfound} />
			</Switch>
		</div>
	</Router>
)
export default Routes;
