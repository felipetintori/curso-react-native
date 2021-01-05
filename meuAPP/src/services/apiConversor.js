import axios from 'axios'

// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=a865718d6b6cf3059f4e

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7/'
})
