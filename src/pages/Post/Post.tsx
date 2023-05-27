import { useParams } from 'react-router-dom'
import GithubContext from '../../contexts/GithubContext'
import { useContext } from 'react'
import PostHeader from '../../components/PostHeader/PostHeader'
import PostText from '../../components/PostText/PostText'
import { PostContainer } from './styles'

export default function Post() {
  const { id } = useParams()
  const { userPosts } = useContext(GithubContext)

  const idNumber = Number(id)
  const post = userPosts?.items.find((item) => item?.id === idNumber)

  return (
    <PostContainer>
      <PostHeader
        title={post?.title}
        url={post?.html_url}
        login={post?.user.login}
        date={post?.created_at ?? ''}
        comments={post?.comments}
      />
      <PostText post={post?.body} />
    </PostContainer>
  )
}
