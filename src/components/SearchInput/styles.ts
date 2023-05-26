import { Box, TextField } from '@mui/material'
import styled from 'styled-components'
import theme from '../../styles/themes/default'

export const InputContainer = styled(Box)(() => ({
  marginTop: '4.5rem',
}))

export const TextContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
}))

export const InputSearch = styled(TextField)(() => ({
  width: '100%',
  background: theme['base-input'],
  borderRadius: '0.375rem',

  '& .MuiOutlinedInput-root': {
    border: `1px solid ${theme['base-border']}`,
    borderRadius: '0.375rem',
    fontFamily: 'nunito, sans-serif',
    color: theme['base-label'],
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
  },
}))
