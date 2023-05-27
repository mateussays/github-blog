import { Box, Grid, Skeleton, Typography } from '@mui/material'
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
import { Link } from 'react-router-dom'

export function PostCard() {
  const { userPosts, isLoading } = useContext(GithubContext)
  return (
    <CardContainer>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        {userPosts?.items.map((post) => (
          <Grid item xs={6} key={post.id}>
            {isLoading ? (
              <Card>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    bgcolor: `${theme['base-post']}`,
                    borderRadius: '0.625rem',
                  }}
                />
                <Skeleton
                  variant="text"
                  width={350}
                  height={20}
                  sx={{
                    bgcolor: `${theme['base-label']}`,
                    borderRadius: '0.625rem',
                  }}
                />
                <Skeleton
                  variant="text"
                  width={350}
                  height={150}
                  sx={{
                    bgcolor: `${theme['base-label']}`,
                    borderRadius: '0.625rem',
                  }}
                />
              </Card>
            ) : (
              <Link
                to={`/post/${post.number}`}
                style={{ textDecoration: 'none' }}
              >
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
              </Link>
            )}
          </Grid>
        ))}
      </Grid>
    </CardContainer>
  )
}
