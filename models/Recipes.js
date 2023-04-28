const { Double } = require("mongodb")
const mongoose = require("mongoose")
const RecipesSchema = mongoose.Schema({
    recipes_name: String,
    recipes_qunatity: String,
    recipes_price: Number
    // recipes_name: {
    //     type: String,
    //     required: true
    // },
    // recipes_qunatity: {
    //     type: Number,
    //     required: true,
    //     min: 0,
    //     max: 20
    // },
    // Recipes_price: {
    //     type: Number,
    //     required: true,
    //     min: 0,
    //     max: 2000
    // }
})
module.exports = mongoose.model("Recipes",
    RecipesSchema)