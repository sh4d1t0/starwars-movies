import React from 'react'
import './App.css'
import { Link as RouterLink, Route, Routes, Outlet } from 'react-router-dom'
import { Box, Grid, Link, Typography } from '@mui/material'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }} className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />}></Route>
        {/* Using path="*"" means "match anything", so this route
              acts like a catch-all for URLs that we don't have explicit
              routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </Box>
  )
}

function Home() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography component="div" variant="h2">
          <Box sx={{ textAlign: 'center', m: 1 }}>Peliculas de Starwars</Box>
        </Typography>
        <Typography component="div" variant="body1">
          <Box sx={{ textAlign: 'center', m: 1 }}>
            Homepage con listado de peliculas starwars
          </Box>
        </Typography>
        <Link component={RouterLink} to="/characters">
          Personajes
        </Link>
      </Grid>
    </>
  )
}

function Characters() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography component="div" variant="h2">
          <Box sx={{ textAlign: 'center', m: 1 }}>Personajes Starwars</Box>
        </Typography>
        <Typography component="div" variant="body1">
          <Box sx={{ textAlign: 'center', m: 1 }}>
            Aqui van los personajes de starwars.
          </Box>
        </Typography>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </Grid>
    </>
  )
}

function NoMatch() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography component="div" variant="h2">
          <Box sx={{ textAlign: 'center', m: 1 }}>Error 404</Box>
        </Typography>
        <Typography component="div" variant="body1">
          <Box sx={{ textAlign: 'center', m: 1 }}>Contenido no encontrado.</Box>
        </Typography>
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </Grid>
    </>
  )
}

export default App
