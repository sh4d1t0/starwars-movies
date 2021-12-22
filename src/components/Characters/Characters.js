import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

const Characters = () => {
  const charactersAPI = 'https://swapi.dev/api/people/'
  const [data, setData] = useState([])

  const charactersRequest = async () => {
    await axios.get(charactersAPI).then(res => {
      const data = res.data.results
      setData(data)
    })
  }

  useEffect(() => {
    charactersRequest()
  }, [])

  return (
    <Grid container rowSpacing={1} columnSpacing={2} alignItems="top">
      {data.map(elemento => {
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
                  {elemento.films.map(function (item, i) {
                    return <FilmsData films={item} key={i} />
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
