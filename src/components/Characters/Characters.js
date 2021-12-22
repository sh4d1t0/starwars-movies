import React, { useEffect, useReducer } from 'react'
import api from '../../services/api'
import FilmsData from '../Films/FilmsData'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCharacters':
      return { ...state, characters: action.payload }
    default:
      throw new Error()
  }
}

const ACTION = {
  GET_CHARACTERS: 'getCharacters'
}

const Characters = () => {
  const [state, dispatch] = useReducer(reducer, {
    characters: []
  })

  useEffect(() => {
    const charactersRequest = async () => {
      try {
        const response = await api.get('people')
        dispatch({
          type: ACTION.GET_CHARACTERS,
          payload: response.data.results
        })
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log('Error: ' + err.message)
        }
      }
    }
    charactersRequest()
  }, [])

  return (
    <Grid container rowSpacing={1} columnSpacing={2} alignItems="top">
      {state.characters.map(elemento => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={elemento.name}>
            <Card>
              <CardHeader
                title={elemento.name}
                subheader={'Genero: ' + elemento.gender}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Color de ojos: {elemento.eye_color}
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                  filmes:{' '}
                  {elemento.films.map(function (film, i) {
                    return <FilmsData films={film} key={i} />
                  })}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Characters
