import { Box, Grid, Typography } from '@mui/material'
import {
  Card,
  CardContainer,
  Text,
  TextContainer,
  TitlesCardContent,
} from './styles'
import { useContext } from 'react'
import GithubContext from '../../contexts/GithubContext'
import theme from '../../styles/themes/default'
import formaterDate from '../../utils/formaterDate'

export function PostCard() {
  const { userPosts } = useContext(GithubContext)
  return (
    <CardContainer>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {userPosts?.items.map((post) => (
          <Grid item xs={6} key={post.id}>
            <Card>
              <TitlesCardContent>
                <Box
                  sx={{
                    width: '17rem',
                  }}
                >
                  <Typography
                    sx={{
                      color: theme['base-title'],
                      fontFamily: 'Nunito, sans-serif',
                      fontSize: '1rem',
                      fontWeight: '700',
                    }}
                  >
                    {post.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'nunito, sans-serif',
                    fontSize: '0.875rem',
                    color: theme['base-span'],
                    fontWeight: '400',
                    lineHeight: '1.375rem',
                  }}
                >
                  {formaterDate(post.created_at)}
                </Typography>
              </TitlesCardContent>
              <TextContainer>
                <Text>{post.body}</Text>
              </TextContainer>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardContainer>
  )
}
