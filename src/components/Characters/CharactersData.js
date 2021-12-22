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
    <>
      {character.name}
      {', '}
    </>
  )
}

export default CharactersData
