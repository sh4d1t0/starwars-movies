import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Grid, Link, Typography } from '@mui/material'

export default function ErrorPage() {
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
