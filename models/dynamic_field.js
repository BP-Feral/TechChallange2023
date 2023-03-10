const mongoose = require('mongoose')

const dynamicFieldSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    mandatory: {
        type: Boolean,
        required: true
    },
    document_keywords: {
        type: [String],
        required: true
    },
    ID_Option: [mongoose.SchemaTypes.ObjectId]
})

module.exports = mongoose.model('Dynamic Field', dynamicFieldSchema)