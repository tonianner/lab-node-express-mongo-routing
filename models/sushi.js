var mongoose = require('mongoose');
var userSchema = require('./user').schema

// create a schema
var sushiSchema = new mongoose.Schema({
  sushi_name:   { type: String, unique: true },
  comment:      String,
  where:        String,
  user:         String,
  status:       { type: String, enum: ["favourite", "SUPER favourite"] }
  // photoUrl
});

// CREATE MODEL
var Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi;

// sushiSchema.methods.showPhoto = function(){
//   return '/img/' + this.photoUrl
// }
// <img src="<% sushi.showPhoto() %>">