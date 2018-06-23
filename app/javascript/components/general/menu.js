import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Home from '../home/home'
import Create from '../create/create'

export default class Menu extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<a href="/">
						<RaisedButton label="HOME" primary={true}/>
					</a>
					<a href="/create">
						<RaisedButton label="CREATE" primary={true}/>
					</a>

				<Switch>
					  	<Route exact path='/' component={Home} />
					  	<Route exact path='/create' component={Create} />
					  </Switch>

				</div>
			</BrowserRouter>
		)
	}
}
