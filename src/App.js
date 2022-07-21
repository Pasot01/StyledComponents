import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/global'
import { Container } from './components/styles/container-style'
import Header from './components/Header'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
      <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>


  );
}

export default App;
