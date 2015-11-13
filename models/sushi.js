var mongoose = require('mongoose');
var userSchema = require('./user').schema

// create a schema
var sushiSchema = new mongoose.Schema({
  sushi_name:   { type: String, unique: true },
  comment:      String,
  status:       { type: String, enum: ["favourite", "SUPER favourite"] },
});

// CREATE MODEL
var Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi;