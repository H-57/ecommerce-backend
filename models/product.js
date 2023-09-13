const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: [true, "title is empty"], unique: [true, "product allready exists"] },
    description: { type: String, required: [true, "description is empty"] },
    price: { type: Number, required: [true, "price is empty"], min: [1, "price is too low"] },
    discountPercentage: { type: Number, required: [true, "discount is empty"], min: [0, "Percentage is too low"], max: [90, "Percentage is too high"] },
    rating: { type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max price'], default: 0 },
    stock: { type: Number, min: [0, 'wrong min stock'], default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: [true, "images are empty"] },
    images: { type: [String], required: [true, "images are empty"] }
})

exports.Product = mongoose.model('Product', productSchema)