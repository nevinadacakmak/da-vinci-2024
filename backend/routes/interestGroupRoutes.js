const express = require('express');
const InterestGroup = require('../models/InterestGroup');
const router = express.Router();

router.post('/', async (req, res) => {
    const { productId, businessId } = req.body;
    let group = await InterestGroup.findOne({ productId });

    if (!group) {
        group = new InterestGroup({ productId, interestedBusinesses: [businessId], savingsReached: 0 });
    } else if (!group.interestedBusinesses.includes(businessId)) {
        group.interestedBusinesses.push(businessId);
    }

    group.savingsReached = group.interestedBusinesses.length; // Update with your own savings logic
    await group.save();
    res.json(group);
});

module.exports = router;
