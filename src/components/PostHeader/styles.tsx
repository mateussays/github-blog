import { Box, Card, Container } from '@mui/material'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

export const ContainerBackground = styled(Container)(() => ({
  justifyContent: 'center',
  '&.MuiContainer-root ': {
    display: 'flex',
    maxWidth: '100%',
    padding: '0',
  },
}))

export const ProfileCardContainer = styled(Card)(() => ({
  width: '54rem',
  padding: '2rem 2.5rem',
  marginTop: '-2.5rem',

  '&.MuiPaper-root': {
    background: `${theme['base-profile']} `,
    boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.2) ',
    borderRadius: '0.625rem ',
  },
}))

export const LinksContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'nunito, sans-serif',
  fontSize: '0.750rem',
  fontWeight: '700',
  lineHeight: '1.25rem',
  color: `${theme['brand-blue']}`,

  a: {
    textDecoration: 'none',
    color: `${theme['brand-blue']}`,
  },
}))

export const LinkContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}))

export const TitleContainer = styled(Box)(() => ({
  marginTop: '1.25rem',
}))
