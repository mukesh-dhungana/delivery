import React, { Component } from "react";
import {
	Route,
	// Switch,
	// withRouter
} from "react-router-dom";
import Header from '../components/layout/header';
import Footer from '../components/layout/footer'
import Home from '../screens/home';
import OfficeTime from '../screens/officeTime';
import Food from '../screens/food';
import Alcohols from '../screens/alcohols';
import Alcohol from '../screens/alcohol';
import Vendor from '../screens/vendor';
import About from '../screens/about';
import Merchants from '../screens/merchants';
import Points from '../screens/points';
import Terms from '../screens/terms';

export class Routes extends Component {
	render() {
		return (
            <div className="">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/for-office" component={OfficeTime} />
                <Route exact path="/food" component={Food} />
                <Route exact path="/alcohol" component={Alcohols} />
                <Route exact path="/alcohol/:name" component={Alcohol} />
                <Route exact path="/food/:name" component={Vendor} />
                <Route exact path="/info/about" component={About} />
                <Route exact path="/info/legal/terms" component={(props)=><Terms {...props} main="Terms" />} />
                <Route exact path="/info/legal/policy" component={(props)=><Terms {...props} main="Policy" />} />
                <Route exact path="/info/merchants" component={Merchants} />
                <Route exact path="/delivery-points" component={Points} />
                <Footer />
            </div>
        );
	}
}


export default Routes;