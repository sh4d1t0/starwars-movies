import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharactersData from '../Characters/CharactersData'
import { Card, CardContent, Grid, Typography } from '@mui/material'

const Films = () => {
  const filmAPI = 'https://swapi.dev/api/films'
  const [data, setData] = useState([])

  const filmsRequest = async () => {
    await axios.get(filmAPI).then(res => {
      const data = res.data.results
      setData(data)
    })
  }

  useEffect(() => {
    filmsRequest()
  }, [])

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      direction="row"
      justifyContent="center"
    >
      {data.map(elemento => {
        return (
          <Grid item xs={4} key={elemento.episode_id}>
            <Card>
              <CardContent>
                <Typography component="div" variant="h5">
                  Nombre: {elemento.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Episodio: {elemento.episode_id}
                </Typography>
                <Typography variant="body2">
                  Director: {elemento.director}
                </Typography>
                <Typography variant="body2">
                  Personajes:{' '}
                  {elemento.characters.map(function (item, i) {
                    return <CharactersData characters={item} key={i} />
                  })}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Films
