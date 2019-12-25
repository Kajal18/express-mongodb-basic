const express = require('express')
const route = express.Router()
const userMethods = require('./userMethods')
const movieMethods = require('./moviesMethods')
const reviewMethods = require('./reviewsMethods')
const authentication = require('../middleware/authentication')
const { validateToken } = require('../middleware/validateToken')

route.get('/user/list', validateToken, userMethods.list)
route.post('/user/create', validateToken, userMethods.create)
route.post('/user/update', validateToken, userMethods.update)
route.delete('/user/delete/:id', validateToken, userMethods.deleteUser)
route.get('/user/search', validateToken, userMethods.searchUser)


route.get('/movie/list', validateToken, movieMethods.list)
route.delete('/movie/delete/:id', validateToken, movieMethods.deleteMovie)
route.post('/movie/create', validateToken, movieMethods.create)
route.post('/movie/update', validateToken, movieMethods.update)
route.get('/movie/search', movieMethods.search)

route.get('/review/list', validateToken, reviewMethods.list)
route.post('/review/create', validateToken, reviewMethods.create)
route.post('/review/update', validateToken, reviewMethods.update)

route.post('/login', authentication)
module.exports = route
