import { TextContainer } from './styles'

interface PostTextProps {
  post?: string
}

export default function PostText({ post }: PostTextProps) {
  return <TextContainer sx={{ textAlign: 'justify' }}>{post}</TextContainer>
}
