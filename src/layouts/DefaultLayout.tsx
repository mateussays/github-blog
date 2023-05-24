import { Link, Outlet } from 'react-router-dom'
import { BackgroundContainer, Container } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <BackgroundContainer>
        <img src="../../public/images/left-effect.png" alt="Background Image" />
        <Link to="/">
          <img src="../../public/images/logo.png" alt="Logo" />
        </Link>
        <img
          src="../../public/images/right-effect.png"
          alt="Background Image"
        />
      </BackgroundContainer>
      <Outlet />
    </Container>
  )
}
