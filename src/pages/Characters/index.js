import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Grid, Link, Typography } from '@mui/material'
import Characters from '../../components/Characters/Characters'

export default function CharactersPage() {
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
        <Characters />
        <Link component={RouterLink} to="/">
          Home
        </Link>
      </Grid>
    </>
  )
}
