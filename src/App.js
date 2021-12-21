import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider
} from '@mui/material'
import Menu from './components/Menu/Menu'
import HomePage from './pages/Home'
import CharactersPage from './pages/Characters'
import ErrorPage from './pages/ErrorPage'
import StarWarsLogo from './images/logo-star-wars.png'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 2 }} className="App">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <img
            src={StarWarsLogo}
            alt="starwars-logo"
            className="starWarsLogo"
          />
        </Box>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="characters" element={<CharactersPage />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default App
