import { Box } from '@mui/material'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

export const CardContainer = styled(Box)(() => ({
  margin: '3rem 0',
}))

export const Card = styled(Box)(() => ({
  background: theme['base-post'],
  borderRadius: '0.625rem',
  padding: '2rem',
  width: '100%',
  maxWidth: '100%',
  height: '16.25rem',
}))

export const TitlesCardContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1.25rem',
}))

export const TextContainer = styled(Box)(() => ({
  display: 'flex',
  overflow: 'hidden',
}))

export const Text = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  color: ${theme['base-text']};
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
`
