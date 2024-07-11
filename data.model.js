const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userId: {
        type: Number
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
}, {
    timeStamps: true
})

const DataModel = mongoose.model("DataModel", schema);

module.exports = DataModel