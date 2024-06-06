// Define a schema and model
const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const categorySchema = new Schema({
    id: { type: Number, required: true },
    categoryName : { type: String, required: true },
    categoryCreate: { type: String, required: true },
});

const categoryModel = mongoose.model('categories', categorySchema);

module.exports = categoryModel



