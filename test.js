const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/Neosoft_test').then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json())

app.use('/api', require('./route.js'))

app.listen(4000, () => {
    console.log("server is running on 4000")
})