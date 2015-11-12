var mongoose = require('mongoose');

// create a schema
var ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

// CREATE MODEL
var IngredientModel = mongoose.model('IngredientModel', ingredientSchema);

module.exports.model = IngredientModel;
module.exports.schema = ingredientSchema;