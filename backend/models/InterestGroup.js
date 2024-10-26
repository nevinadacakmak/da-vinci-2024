const mongoose = require('mongoose');

const interestGroupSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    interestedBusinesses: [String], // list of business IDs
    savingsReached: Number,
});

module.exports = mongoose.model('InterestGroup', interestGroupSchema);
