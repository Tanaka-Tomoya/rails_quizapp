import React, { Component } from 'react'
import Hello from './hello_react'
import Test from '../components/test'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

export default class Menu extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<a href="/">
						<RaisedButton label="HOME" primary={true}/>
					</a>
					<a href="/test">
						<RaisedButton label="CREATE" primary={true}/>
					</a>

					<Switch>
						<Route exact path='/' component={Hello} />
						<Route exact path='/test' component={Test} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
