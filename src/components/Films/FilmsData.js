import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FilmsData = props => {
  const { films } = props

  //console.log('films props:', films)

  //const filmAPI = films //recibir por props
  const [film, setData] = useState([])

  const filmsRequest = async () => {
    await axios.get(films).then(res => {
      const film = res.data
      setData(film)
    })
  }

  useEffect(() => {
    filmsRequest()
  }, [])

  return (
    <div>
      <p>{film.title}</p>
    </div>
  )
}

export default FilmsData
