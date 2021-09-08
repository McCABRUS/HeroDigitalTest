var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  email: String, 
  fieldName: String, 
  fieldName: String,
  fieldName: String,
  firstName: String,
  lastName: String,
  euResident: String,
  org: String
})

var User = mongoose.model('User', userSchema)

module.exports = User