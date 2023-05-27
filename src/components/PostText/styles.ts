import { Box } from '@mui/material'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

export const TextContainer = styled(Box)(() => ({
  margin: '2.5rem 2rem',
  fontSize: '1rem',
  fontWeight: 400,
  color: theme['base-text'],
  lineHeight: '1.5rem',
}))
