import axios from 'axios'

const URL = 'http://localhost:7878'
const api = axios.create({
    baseURL: URL
})

exports.modules = api