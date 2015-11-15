var mongoose = require('mongoose');
var userSchema = require('./user').schema

// create a schema
var sushiSchema = new mongoose.Schema({
  sushi_name:   { type: String, required: true},
  comment:      { type: String, required: true},
  where:        String,
  user:         String,
  status:       { type: String, enum: ["favourite", "SUPER favourite"] },
  photoUrl:     String
});

sushiSchema.methods.showPhoto = function(){
  return this.photoUrl
}
// <img src="<% sushi.showPhoto() %>">


// CREATE MODEL
var Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi;

