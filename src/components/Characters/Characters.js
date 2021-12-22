import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import FilmsData from '../Films/FilmsData'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { textAlign } from '@mui/system'

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCharacters':
      return { ...state, characters: action.payload }
    case 'url':
      return { ...state, url: action.payload }
    case 'prevPage':
      return { ...state, previous: action.payload }
    case 'nextPage':
      return { ...state, next: action.payload }
    default:
      throw new Error()
  }
}

const ACTION = {
  GET_CHARACTERS: 'getCharacters',
  URL: 'url',
  PREVIOUS_PAGE: 'prevPage',
  NEXT_PAGE: 'nextPage'
}

const Characters = () => {
  const [state, dispatch] = useReducer(reducer, {
    characters: [],
    url: 'https://swapi.dev/api/people/',
    previous: null,
    next: null
  })

  useEffect(() => {
    const charactersRequest = async () => {
      try {
        const response = await axios.get(state.url)
        dispatch({
          type: ACTION.GET_CHARACTERS,
          payload: response.data.results
        })
        dispatch({
          type: ACTION.PREVIOUS_PAGE,
          payload: response.data.previous
        })
        dispatch({
          type: ACTION.NEXT_PAGE,
          payload: response.data.next
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
  }, [state.url])

  const handleClickBack = () => {
    //changeKeyword({ keyword: evt.target.value })
    dispatch({ type: ACTION.URL, payload: state.previous })
  }

  const handleClickNext = () => {
    //changeKeyword({ keyword: evt.target.value })
    dispatch({ type: ACTION.URL, payload: state.next })
  }

  return (
    <>
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
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained" onClick={handleClickBack}>
          Atras
        </Button>
        <Button variant="contained" onClick={handleClickNext}>
          Siguiente
        </Button>
      </Stack>
    </>
  )
}

export default Characters
