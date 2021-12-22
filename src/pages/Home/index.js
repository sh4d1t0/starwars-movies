import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Films from '../../components/Films/Films'

export default function HomePage() {
  return (
    <>
      <Grid container direction="column">
        <Typography component="div" variant="h2">
          <Box sx={{ textAlign: 'center', m: 1 }}>Peliculas</Box>
        </Typography>
        <Films />
      </Grid>
    </>
  )
}
