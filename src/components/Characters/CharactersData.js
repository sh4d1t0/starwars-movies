import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CharactersData = props => {
  const { characters } = props
  const [character, setData] = useState([])

  const filmsRequest = async () => {
    await axios.get(characters).then(res => {
      const character = res.data
      setData(character)
    })
  }

  useEffect(() => {
    filmsRequest()
  }, [])

  return (
    <div>
      <p>{character.name}</p>
    </div>
  )
}

export default CharactersData
