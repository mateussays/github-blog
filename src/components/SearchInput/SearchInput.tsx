import { Skeleton, Typography } from '@mui/material'
import { InputContainer, InputSearch, TextContainer } from './styles'
import theme from '../../styles/themes/default'
import { useContext } from 'react'
import GithubContext from '../../contexts/GithubContext'

export function SearchInput() {
  const { userPosts, isLoading, searchText, setSearchText, setShouldSearch } =
    useContext(GithubContext)
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
            marginRight: '0.125rem',
          }}
        >
          {isLoading ? (
            <Skeleton
              variant="text"
              width={100}
              height={20}
              sx={{
                bgcolor: `${theme['base-post']}`,
                borderRadius: '0.625rem',
              }}
            />
          ) : (
            `${userPosts?.total_count} publicações`
          )}
        </Typography>
      </TextContainer>
      <InputSearch
        placeholder="Buscar conteúdo"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onBlur={() => setShouldSearch(true)}
      />
    </InputContainer>
  )
}
