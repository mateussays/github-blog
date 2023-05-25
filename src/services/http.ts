import { api } from './axios'

const token = import.meta.env.VITE_REACT_APP_GITHUB_AUTH_TOKEN

const headers = {
  Authorization: `Bearer ${token}`,
}

interface Profile {
  username: string
}
export const getProfileGithub = async ({ username }: Profile) => {
  const response = await api.get(`users/${username}`, { headers })

  return response.data
}
