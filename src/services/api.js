import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/'

export default axios.create({
  baseURL: baseUrl
})
