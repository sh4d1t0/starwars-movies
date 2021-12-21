import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import HomePage from './pages/Home'
import CharactersPage from './pages/Characters'
import ErrorPage from './pages/ErrorPage'

import './App.css'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="characters" element={<CharactersPage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Outlet />
    </Box>
  )
}

export default App
