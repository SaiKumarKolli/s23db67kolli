const mongoose = require("mongoose")
const RecipesSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Recipes",
RecipesSchema)