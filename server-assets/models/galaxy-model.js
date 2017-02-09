let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let galaxySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Relations
  stars: [{ type: ObjectId, ref: 'Star' }]
})

let GalaxyModel = mongoose.model('Galaxy', galaxySchema)




module.exports = GalaxyModel
