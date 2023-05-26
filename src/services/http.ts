import { api } from './axios'
import { Profile, ProfilePosts } from '../types/services.types'

const token = import.meta.env.VITE_REACT_APP_GITHUB_AUTH_TOKEN

const headers = {
  Authorization: `Bearer ${token}`,
}

export const getProfileGithub = async ({ username }: Profile) => {
  const response = await api.get(`users/${username}`, { headers })

  return response.data
}

export const searchIAllssuesGithub = async ({ text }: ProfilePosts) => {
  const response = await api.get(
    `search/issues?q=${text}%20repo:mateussays/github-blog`,
    { headers },
  )

  return response.data
}
