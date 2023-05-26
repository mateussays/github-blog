import { CardContent, Skeleton, Typography, Link } from '@mui/material'
import {
  AvatarContainer,
  BioContainer,
  ContainerBackground,
  InfoIconsContainer,
  NameContainer,
  ProfileCardContainer,
  ProfileContentContainer,
  TextInfoIcons,
  TextInfoIconsContainer,
} from './styles'
import { useContext, useEffect, useState } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import theme from '../../styles/themes/default'
import { Buildings, GithubLogo, Share, Users } from 'phosphor-react'

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
              height: '7.5rem',
              bgcolor: `${theme['base-post']}`,
              borderRadius: '0.625rem',
            }}
          />
        ) : (
          <CardContent sx={{ display: 'flex', padding: '0 !important' }}>
            <AvatarContainer>
              <img src={userProfile?.avatar_url} alt="Avatar" />
            </AvatarContainer>
            <ProfileContentContainer>
              <NameContainer>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'nunito, sans-serif',
                    color: `${theme['base-title']}`,
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    lineHeight: '2rem',
                  }}
                >
                  {userProfile?.name}
                </Typography>
                <Link
                  href={userProfile?.html_url}
                  sx={{
                    fontFamily: 'nunito, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    lineHeight: '1.25rem',
                    color: `${theme['brand-blue']}`,
                  }}
                  underline="none"
                >
                  GITHUB {''}
                  <Share size={12} />
                </Link>
              </NameContainer>
              <BioContainer>
                <Typography
                  sx={{
                    fontFamily: 'nunito, sans-serif',
                    color: `${theme['base-text']}`,
                    fontSize: '1rem',
                    fontWeight: '400',
                    lineHeight: '1.5rem',
                  }}
                >
                  {userProfile?.bio}
                </Typography>
              </BioContainer>
              <InfoIconsContainer>
                <TextInfoIconsContainer>
                  <GithubLogo size={18} color={theme['base-label']} />
                  <TextInfoIcons>{userProfile?.login}</TextInfoIcons>
                </TextInfoIconsContainer>
                <TextInfoIconsContainer>
                  <Buildings size={18} color={theme['base-label']} />
                  <TextInfoIcons>{userProfile?.company}</TextInfoIcons>
                </TextInfoIconsContainer>
                <TextInfoIconsContainer>
                  <Users size={18} color={theme['base-label']} />
                  <TextInfoIcons>
                    {userProfile?.followers} seguidores
                  </TextInfoIcons>
                </TextInfoIconsContainer>
              </InfoIconsContainer>
            </ProfileContentContainer>
          </CardContent>
        )}
      </ProfileCardContainer>
    </ContainerBackground>
  )
}
