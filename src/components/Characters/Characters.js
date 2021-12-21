import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FilmsData from '../Films/FilmsData'

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
    <div>
      {data.map(elemento => {
        return (
          <div key={elemento.name}>
            <p>Nombre: {elemento.name}</p>
            <p>Color de ojos: {elemento.eye_color}</p>
            <p>Genero: {elemento.gender}</p>
            <div>
              filmes:{' '}
              {elemento.films.map(function (item, i) {
                return <FilmsData films={item} key={i} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Characters
