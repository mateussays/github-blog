import { Box } from '@mui/material'
import styled from 'styled-components'

export const ContainerBackground = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  background: `linear-gradient(
    102deg,
    rgb(13, 40, 66) 0%,
    rgba(11, 29, 47, 1) 100%
  )`,
}))

export const BackgroundContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const ImageLogo = styled.img`
  max-width: 100%;
  height: auto;
`
