const mongoose = require('mongoose')

const fieldTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ID_Option: [mongoose.SchemaTypes.ObjectId]
})

module.exports = mongoose.model('Field Type', fieldTypeSchema)