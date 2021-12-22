import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
  switch (action.type) {
    case 'getFilms':
      return { ...state, films: action.payload }
    default:
      throw new Error()
  }
}

const ACTION = {
  GET_FILMS: 'getFilms'
}

const FilmsData = props => {
  const { films } = props
  const [state, dispatch] = useReducer(reducer, { films: [] })

  useEffect(() => {
    const filmsRequest = async () => {
      try {
        const response = await axios.get(films)
        dispatch({ type: ACTION.GET_FILMS, payload: response.data })
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
      {state.films.title}
      {', '}
    </>
  )
}

export default FilmsData
