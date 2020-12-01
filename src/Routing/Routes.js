import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import AppRecipe from '../componentes/AppRecipe/AppRecipe';
import MoreinfoRecipe from '../componentes/Moreinfo/MoreinfoRecipe';
import Header from '../componentes/Header/Header';
import Footer from '../componentes/Footer/Footer';
export class Routes extends Component {
	render() {
		return (
		<div>
			<Router >
				<Header/>
					<Switch >
						<Route path = "/" exact component = { AppRecipe }/> 
						<Route path = "/info/:slug" exact component = { MoreinfoRecipe }/>
					</Switch > 
				<Footer/>
			</Router >
		</div> 
		)
	}
}

export default Routes