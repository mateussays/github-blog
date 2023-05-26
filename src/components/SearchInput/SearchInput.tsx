import { Typography } from '@mui/material'
import { InputContainer, InputSearch, TextContainer } from './styles'
import theme from '../../styles/themes/default'

export function SearchInput() {
  return (
    <InputContainer>
      <TextContainer>
        <Typography
          sx={{
            fontSize: '1.125rem',
            fontFamily: 'Nunito, sans-serif',
            color: theme['base-subtitle'],
            fontWeight: '700',
            lineHeight: '1.75rem',
            marginLeft: '0.125rem',
          }}
        >
          Publicações
        </Typography>
        <Typography
          sx={{
            fontSize: '0.875rem',
            fontFamily: 'Nunito, sans-serif',
            color: theme['base-span'],
            fontWeight: '400',
            lineHeight: '1.375rem',
            marginLeft: '0.125rem',
          }}
        >
          6 publicações
        </Typography>
      </TextContainer>
      <InputSearch placeholder="Buscar conteúdo" />
    </InputContainer>
  )
}
