import { Container, Card } from '@mui/material'
import styled from 'styled-components'

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
