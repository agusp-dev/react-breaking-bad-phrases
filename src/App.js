import styled from '@emotion/styled'

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

	const handleGetPhrase = () => {
		apiConsume()
	}

	const apiConsume = async () => {
		const api = await fetch( URL )
		const result = await api.json()
		console.log( result[0] )
	}

  return (
    <Container>
			<Button
				onClick={ handleGetPhrase }
				>Get Phrase
			</Button>
		</Container>
  );
}

export default App;
