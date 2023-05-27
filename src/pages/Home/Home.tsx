import PostCard from '../../components/PostCard/PostCard'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SearchInput from '../../components/SearchInput/SearchInput'
import { HomeContainer } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput />
      <PostCard />
    </HomeContainer>
  )
}
