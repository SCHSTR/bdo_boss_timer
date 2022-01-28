const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commandSchema = new Schema({
    user: {type: String, required: true},
    isParticipating: {type: String, require: true},
})

module.exports = mongoose.model('checkin', commandSchema)