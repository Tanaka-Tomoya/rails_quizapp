import React, { Component } from 'react'
import Menu from '../components/general/menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Menu />
			</MuiThemeProvider>
		)
	}
}
