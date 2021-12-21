import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Grid, Link, Typography } from '@mui/material'
import Films from '../../components/Films/Films'

export default function HomePage() {
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
        <Films />
        <Link component={RouterLink} to="/characters">
          Personajes
        </Link>
      </Grid>
    </>
  )
}
