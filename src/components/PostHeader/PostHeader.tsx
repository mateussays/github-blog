import { Typography } from '@mui/material'
import {
  ContainerBackground,
  LinkContainer,
  LinksContainer,
  ProfileCardContainer,
  TitleContainer,
} from './styles'
import {
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Share,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import theme from '../../styles/themes/default'
import {
  InfoIconsContainer,
  TextInfoIcons,
  TextInfoIconsContainer,
} from '../ProfileCard/styles'
import formaterDate from '../../utils/formaterDate'

interface PostHeaderProps {
  title?: string
  url?: string
  login?: string
  date: string
  comments?: number
}

export default function PostHeader({
  title,
  url,
  login,
  date,
  comments,
}: PostHeaderProps) {
  return (
    <ContainerBackground>
      <ProfileCardContainer>
        <LinksContainer>
          <LinkContainer>
            <CaretLeft size={12} style={{ marginRight: '0.5rem' }} />
            <Link to="/">VOLTAR</Link>
          </LinkContainer>
          <LinkContainer>
            <Link to={url ?? ''}>VER NO GITHUB</Link>
            <Share size={12} style={{ marginLeft: '0.5rem' }} />
          </LinkContainer>
        </LinksContainer>
        <TitleContainer>
          <Typography
            sx={{
              fontFamily: 'nunito, sans-serif',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: `${theme['base-title']}`,
            }}
          >
            {title}
          </Typography>
        </TitleContainer>
        <InfoIconsContainer>
          <TextInfoIconsContainer>
            <GithubLogo size={18} color={theme['base-label']} />
            <TextInfoIcons>{login}</TextInfoIcons>
          </TextInfoIconsContainer>
          <TextInfoIconsContainer>
            <CalendarBlank size={18} color={theme['base-label']} />
            <TextInfoIcons>{formaterDate(date)}</TextInfoIcons>
          </TextInfoIconsContainer>
          <TextInfoIconsContainer>
            <ChatCircle size={18} color={theme['base-label']} />
            <TextInfoIcons>{comments}</TextInfoIcons>
          </TextInfoIconsContainer>
        </InfoIconsContainer>
      </ProfileCardContainer>
    </ContainerBackground>
  )
}
