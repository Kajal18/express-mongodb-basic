const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const middleware = require('./middleware')
const app = express()
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/mongo_test").then(() => {
    console.log('Mongodb connected')
}).catch(err => {
    console.log(err)
})
app.use(routes)
// app.use(middleware)
app.listen(4000, () => {
    console.log("Server running on 4000 port")
})