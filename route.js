const route = require('express').Router()
const DataModel = require('./data.model.js')

route.get('health-check', (req, res) => {
    res.status(200).json({
        message: 'Health Check OK'
    })
})

route.post('/fetch', async (req, res) => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resp = await data.json()

        const newData = await DataModel.create(resp)

        res.status(200).json({
            message: "store successfully",
            data: newData
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = route