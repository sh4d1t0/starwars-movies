import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Characters from '../../components/Characters/Characters'

export default function CharactersPage() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
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
      </Grid>
    </>
  )
}
