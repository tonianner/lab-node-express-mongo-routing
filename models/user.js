var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  first_name:   String,
  last_name:    String,
});

// CREATE MODEL
var User = mongoose.model('User', userSchema);

module.exports = User;
