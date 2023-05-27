import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Post } from './pages/Post/Post'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post:id" element={<Post />} />
    </Routes>
  )
}
