import { CardContent, Skeleton } from '@mui/material'
import { ContainerBackground, ProfileCardContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import theme from '../../styles/themes/default'

export function ProfileCard() {
  const { userProfile } = useContext(GithubContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (userProfile) {
      setIsLoading(false)
    }
  }, [userProfile])

  return (
    <ContainerBackground>
      <ProfileCardContainer>
        {isLoading ? (
          <Skeleton
            variant="rectangular"
            sx={{
              width: '49rem',
              height: '3.875rem',
              bgcolor: `${theme['base-post']}`,
              borderRadius: '0.625rem',
            }}
          />
        ) : (
          <CardContent>{userProfile?.login}</CardContent>
        )}
      </ProfileCardContainer>
    </ContainerBackground>
  )
}
