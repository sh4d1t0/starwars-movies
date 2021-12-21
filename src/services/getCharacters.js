import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/people'

export const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data // Characters
}
