import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/films'

export const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data.results // Films
}
