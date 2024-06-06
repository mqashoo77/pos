// Define a schema and model
const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const productSchema = new Schema({
    id: { type: Number, required: true },
    productImg : { type: String, required: true },
    productCode: { type: String, required: true },
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    productDescription: { type: String, required: true },
    productPrice: { type: String, required: true },
    productTax: { type: String, required: true },
    
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel



