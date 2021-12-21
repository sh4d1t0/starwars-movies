import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmsData from '../Films/FilmsData'
import { Card, CardContent, Grid, Typography } from '@mui/material'

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
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      direction="row"
      justifyContent="center"
    >
      {data.map(elemento => {
        return (
          <Grid item xs={4} key={elemento.name}>
            <Card>
              <CardContent>
                <Typography component="div" variant="h5">
                  Nombre: {elemento.name}
                </Typography>
                <Typography variant="body2">
                  Color de ojos: {elemento.eye_color}
                </Typography>
                <Typography variant="body2">
                  Genero: {elemento.gender}
                </Typography>
                <Typography variant="body2">
                  filmes:{' '}
                  {elemento.films.map(function (item, i) {
                    return <FilmsData films={item} key={i} />
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

export default Characters
