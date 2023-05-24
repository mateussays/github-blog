import { Link, Outlet } from 'react-router-dom'
import { BackgroundContainer, Container, Image, ImageLogo } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <BackgroundContainer>
        <Image
          src="../../public/images/left-effect.png"
          alt="Background Image"
        />
        <Link to="/">
          <ImageLogo src="../../public/images/logo.png" alt="Logo" />
        </Link>
        <Image
          src="../../public/images/right-effect.png"
          alt="Background Image"
        />
      </BackgroundContainer>
      <Outlet />
    </Container>
  )
}
