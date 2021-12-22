import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CharactersData = props => {
  const { characters } = props
  const [character, setCharacters] = useState([])

  useEffect(() => {
    const characterRequest = async () => {
      try {
        const response = await axios.get(characters)
        setCharacters(response.data)
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
    characterRequest()
  }, [])

  return (
    <>
      {character.name}
      {', '}
    </>
  )
}

export default CharactersData
