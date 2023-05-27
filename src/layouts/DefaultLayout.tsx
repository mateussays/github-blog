import { Link, Outlet } from 'react-router-dom'
import {
  BackgroundContainer,
  ContainerBackground,
  Image,
  ImageLogo,
} from './styles'

export default function DefaultLayout() {
  return (
    <ContainerBackground>
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
    </ContainerBackground>
  )
}
