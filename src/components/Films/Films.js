import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharactersData from '../Characters/CharactersData'

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
    <div>
      {data.map(elemento => {
        return (
          <div key={elemento.episode_id}>
            <p>Nombre: {elemento.title}</p>
            <p>Numero de episodio: {elemento.episode_id}</p>
            <p>Director: {elemento.director}</p>
            <div>
              Personajes:{' '}
              {elemento.characters.map(function (item, i) {
                return <CharactersData characters={item} key={i} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Films
