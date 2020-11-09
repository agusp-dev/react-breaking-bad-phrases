import React, { useState } from 'react'
import styled from '@emotion/styled'
import Phrase from './Phrase'

const Container = styled.div`
	display: flex;
	align-items: center;
	padding-top: 5rem;
	flex-direction: column;
`

const Button = styled.button`
	background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
	background-size: 300px;
	font-family: Arial, Helvetica, sans-serif;
	color: #FFF;
	margin-top: 3rem;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid black;
`

function App() {

	const URL = 'http://breaking-bad-quotes.herokuapp.com/v1/quotes'

	const [phrase, showPhrase] = useState({})

	const handleGetPhrase = () => {
		apiConsume()
	}

	const apiConsume = async () => {
		const api = await fetch( URL )
		const result = await api.json()
		showPhrase(result[0])
	}

  return (
    <Container>
			{phrase && Object.keys(phrase).length > 0 && (
				<Phrase phrase={ phrase } />
			)}
			<Button
				onClick={ handleGetPhrase }
				>Get Phrase
			</Button>
		</Container>
  );
}

export default App;
