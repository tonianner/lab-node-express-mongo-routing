var mongoose = require('mongoose');
// var ingredientSchema = require('./ingredients').schema

// create a schema
var sushiSchema = new mongoose.Schema({
  sushi_name:   String,
  comment:      String,
  // reference to user_id
  // user:         [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  // reference to embeded_schema
  // ingredients:  [ingredientSchema],
  status:       { type: String, enum: ["favourite", "SUPER favourite"] },

  created_at:   Date,
  updated_at:   Date
});

// CREATE MODEL
var Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi;