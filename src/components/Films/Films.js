import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import CharactersData from '../Characters/CharactersData'
import { styled } from '@mui/material/styles'
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ThePhantomMenace from '../../images/films/1.jpg'
import AttackOfTheClones from '../../images/films/2.jpg'
import RevangeOfTheSith from '../../images/films/3.jpg'
import ANewHopeFilm from '../../images/films/4.jpg'
import TheEmpireStrikesBack from '../../images/films/5.jpg'
import ReturnOfTheJedi from '../../images/films/6.jpg'

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

const Films = () => {
  const [films, setFilms] = useState([])
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    const filmsRequest = async () => {
      try {
        const response = await api.get('films')
        setFilms(response.data.results)
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
    filmsRequest()
  }, [])

  return (
    <Grid container rowSpacing={1} columnSpacing={2} alignItems="top">
      {films.map(elemento => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            key={elemento.episode_id}
          >
            <Card>
              <CardHeader
                title={elemento.title}
                subheader={'Episodio: ' + elemento.episode_id}
              />
              <CardMedia
                component="img"
                height="194"
                image={
                  elemento.episode_id === 1
                    ? ThePhantomMenace
                    : elemento.episode_id === 2
                    ? AttackOfTheClones
                    : elemento.episode_id === 3
                    ? RevangeOfTheSith
                    : elemento.episode_id === 4
                    ? ANewHopeFilm
                    : elemento.episode_id === 5
                    ? TheEmpireStrikesBack
                    : elemento.episode_id === 6
                    ? ReturnOfTheJedi
                    : ANewHopeFilm
                }
                alt={elemento.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Director: {elemento.director}
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                  Personajes:{' '}
                  {elemento.characters.map(function (character, i) {
                    return <CharactersData characters={character} key={i} />
                  })}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph color="text.secondary">
                    {elemento.opening_crawl}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Films
