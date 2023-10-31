import axios from 'axios'

const URL = 'http://10.220.30.147:7878/'
const api = axios.create({
    baseURL: URL
})

module.exports = { api }