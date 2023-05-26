import React, { useEffect, useState, createContext } from 'react'
import { getProfileGithub, searchIAllssuesGithub } from '../services/http'
import { ProfileProps, UserProfileChildren } from '../types/services.types'

const GithubContext = createContext({} as UserProfileChildren)

export const GithubProvider: React.FC<ProfileProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState()
  const [userPosts, setUserPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUserProfile = async () => {
      // Aguardar dois segundos antes de fazer a chamada
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const response = await getProfileGithub({ username: 'mateussays' })
      setUserProfile(response)
    }

    fetchUserProfile()
  }, [])

  useEffect(() => {
    const fetchPostsProfile = async () => {
      // Aguardar dois segundos antes de fazer a chamada
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const response = await searchIAllssuesGithub({ text: '' })
      setUserPosts(response)
    }

    fetchPostsProfile()
  }, [])

  useEffect(() => {
    if (userProfile && userPosts) {
      setIsLoading(false)
    }
  }, [userProfile, setIsLoading, userPosts])

  return (
    <GithubContext.Provider
      value={{ userProfile, userPosts, isLoading, setIsLoading }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
