import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput />
    </HomeContainer>
  )
}
