var mongoose = require('mongoose');

// create a schema
var userSchema = new mongoose.Schema({
  userName:   String,
  comment:    String,
  created_at: Date
});

// CREATE MODEL
var UserModel = mongoose.model('UserModel', userSchema);

module.exports.model = UserModel;
module.exports.schema = userSchema;

