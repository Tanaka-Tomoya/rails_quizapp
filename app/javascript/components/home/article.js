import React, { Component } from 'react'
import styled from 'styled-components'
import Question from './question'
export default class Article extends Component {
	render() {
		return (
			<Main>
				<Search>
					<Form action="">
						<Input type="search" />
					</Form>
				</Search>
				<Question />
			</Main>
		)
	}
}

const Main = styled.div`
	grid-area: contents;
	background-color: white;
	color: black;
`
const Search = styled.div`
	width: 100%;
	display: flex;
	height: 50px;
	position: relative;
	background-color: white;
	border-bottom: 0.5px #AAAAAA solid;
`
const Form = styled.form`
	width: 100%;
	height: 100%;
`
const Input = styled.input`
	width: 100%;
	height: 100%;
`
