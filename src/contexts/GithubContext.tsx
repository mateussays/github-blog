import React, { useEffect, useState, createContext, useCallback } from 'react'
import { getProfileGithub, searchIAllssuesGithub } from '../services/http'
import { ProfileProps, UserProfileChildren } from '../types/services.types'

const GithubContext = createContext({} as UserProfileChildren)

export const GithubProvider: React.FC<ProfileProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState()
  const [userPosts, setUserPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [shouldSearch, setShouldSearch] = useState(true)

  const fetchPostsProfile = useCallback(async () => {
    const response = await searchIAllssuesGithub({ text: searchText })
    setUserPosts(response)
  }, [searchText])

  const fetchUserProfile = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Efeito skeleton

    const response = await getProfileGithub({ username: 'mateussays' })
    setUserProfile(response)
  }

  useEffect(() => {
    if (shouldSearch) {
      fetchPostsProfile()
      setShouldSearch(false)
    }
  }, [searchText, shouldSearch, fetchPostsProfile])

  useEffect(() => {
    if (userProfile) {
      setIsLoading(false)
    }
  }, [userProfile, setIsLoading])

  useEffect(() => {
    fetchUserProfile()
  }, [])

  return (
    <GithubContext.Provider
      value={{
        userProfile,
        userPosts,
        isLoading,
        setIsLoading,
        searchText,
        setSearchText,
        setShouldSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
