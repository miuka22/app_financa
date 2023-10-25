import axios from 'axios'

const URL = 'http://192.168.0.117:7878/'
const api = axios.create({
    baseURL: URL
})

module.exports = { api }