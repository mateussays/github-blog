import { Container, Card, Box, Typography } from '@mui/material'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

export const ContainerBackground = styled(Container)(() => ({
  justifyContent: 'center',
  '&.MuiContainer-root ': {
    display: 'flex',
    maxWidth: '100%',
  },
}))

export const ProfileCardContainer = styled(Card)(({ theme }) => ({
  width: '54rem',
  padding: '2rem 2.5rem',
  marginTop: '-2.5rem',

  '&.MuiPaper-root': {
    background: `${theme['base-profile']} `,
    boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2) ',
    borderRadius: '0.625rem ',
  },
}))

export const AvatarContainer = styled(Box)(() => ({
  width: '9.25rem',
  maxWidth: '100%',

  img: {
    width: '9.25rem',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
  },
}))

export const ProfileContentContainer = styled(Box)(() => ({
  marginLeft: '2rem',
  width: '38.25rem',
  maxWidth: '100%',
}))

export const NameContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const BioContainer = styled(Box)(() => ({
  marginTop: '0.5rem',
}))

export const InfoIconsContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: '1.5rem',
}))

export const TextInfoIconsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  color: `${theme['base-subtitle']}`,
  marginRight: '1.5rem',
}))

export const TextInfoIcons = styled(Typography)(() => ({
  fontFamily: 'nunito !important',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.5rem',
  padding: '0.5rem',
}))
