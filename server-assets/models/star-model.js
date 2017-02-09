let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  name: { type: String, required: true },
  galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }
})

module.exports = mongoose.model('Star', schema)
