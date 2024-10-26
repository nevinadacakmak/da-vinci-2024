const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    minQuantity: Number,
    basePrice: Number,
    discountThresholds: Array, // e.g., [{quantity: 10, price: 90}]
});

module.exports = mongoose.model('Product', productSchema);
