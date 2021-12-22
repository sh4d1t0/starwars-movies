import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FilmsData = props => {
  const { films } = props
  const [film, setFilms] = useState([])

  useEffect(() => {
    const filmsRequest = async () => {
      try {
        const response = await axios.get(films)
        setFilms(response.data)
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
    <>
      {film.title}
      {', '}
    </>
  )
}

export default FilmsData
