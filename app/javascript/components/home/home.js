import React, { Component } from 'react'
import styled from 'styled-components'
import Article from './article'

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Article />
			</Container>
		)
	}
}

const Container = styled.div`
  height: 1000px;
  display: grid;
  grid-template-rows: 45px 30px auto 70px;
  grid-template-columns: 30% 40% 30%;
  grid-template-areas:
      "title title title "
      "nav contents side "
      "nav contents side "
      "footer footer footer";
`
