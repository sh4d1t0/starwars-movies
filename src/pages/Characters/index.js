import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Characters from '../../components/Characters/Characters'

export default function CharactersPage() {
  return (
    <>
      <Grid container direction="column" justifyContent="center">
        <Typography component="div" variant="h2">
          <Box sx={{ textAlign: 'center', m: 1 }}>Personajes de StarWars</Box>
        </Typography>
        <Characters />
      </Grid>
    </>
  )
}
