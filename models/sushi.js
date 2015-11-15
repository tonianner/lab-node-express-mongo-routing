var mongoose = require('mongoose');

// create a schema
var sushiSchema = new mongoose.Schema({
  sushi_name:   { type: String, required: true},
  comment:      { type: String, required: true},
  where:        String,
  status:       { type: String, enum: ["favourite", "SUPER favourite"], default: "favourite" },
  photoUrl:     String
});

sushiSchema.methods.showPhoto = function(){
  return this.photoUrl
}
// <img src="<% sushi.showPhoto() %>">


// CREATE MODEL
var Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi;

