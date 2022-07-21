import { StyleHeader, Nav, Logo } from "./styles/header-style"
import { Container } from './styles/container-style'
import { Button } from './styles/button-style'

export default function Header() {
  return (
    // <StyleHeader bg='#ebfbff'>
    <StyleHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyleHeader>
  )
}
