import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Films from '../../components/Films/Films'

export default function HomePage() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
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
      </Grid>
    </>
  )
}
