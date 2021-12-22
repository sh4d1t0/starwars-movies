import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'getCharacters':
      return { ...state, characters: action.payload }
    default:
      throw new Error()
  }
}

const ACTION = {
  GET_CHARACTERS: 'getCharacters'
}

const CharactersData = props => {
  const { characters } = props
  const [state, dispatch] = useReducer(reducer, { characters: [] })

  useEffect(() => {
    const characterRequest = async () => {
      try {
        const response = await axios.get(characters)
        dispatch({ type: ACTION.GET_CHARACTERS, payload: response.data })
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
      {state.characters.name}
      {', '}
    </>
  )
}

export default CharactersData
