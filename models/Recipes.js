const mongoose = require("mongoose")
const RecipesSchema = mongoose.Schema({
    recipes_name: String,
    recipes_qunatity: String,
    recipes_price: Number
})
module.exports = mongoose.model("Recipes",
    RecipesSchema)