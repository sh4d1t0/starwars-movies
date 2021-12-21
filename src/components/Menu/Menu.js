import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link } from '@mui/material'

const preventDefault = event => event.preventDefault()

const Menu = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2
        }
      }}
      onClick={preventDefault}
    >
      <Link component={RouterLink} to="/" underline="hover">
        Home
      </Link>
      <Link component={RouterLink} to="/characters" underline="hover">
        Personajes
      </Link>
    </Box>
  )
}

export default Menu
