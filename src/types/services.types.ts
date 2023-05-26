import { ReactNode } from 'react'

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Reaction {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface Issue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: any[]
  state: string
  locked: boolean
  assignee: null | User
  assignees: User[]
  milestone: null
  comments: number
  created_at: string
  updated_at: string
  closed_at: null | string
  author_association: string
  active_lock_reason: null
  body: string
  reactions: Reaction
  timeline_url: string
  performed_via_github_app: null
  state_reason: null
  score: number
}

export interface Repository {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

export interface Profile {
  username: string
}

export interface ProfilePosts {
  text: string
}

export interface UserProfileResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
  private_gists: number
  total_private_repos: number
  owned_private_repos: number
  disk_usage: number
  collaborators: number
  two_factor_authentication: boolean
  plan: {
    name: string
    space: number
    collaborators: number
    private_repos: number
  }
}

export interface UserProfileChildren {
  userProfile?: UserProfileResponse
  userPosts?: Repository
  isLoading: boolean
  setIsLoading: (value: boolean) => void
}

export interface ProfileProps {
  children: ReactNode
}
