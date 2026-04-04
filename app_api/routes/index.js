const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// GET all trips
router.get('/trips', ctrlTrips.tripsList);

// GET single trip by code
router.get('/trips/:tripCode', ctrlTrips.tripsFindCode);

module.exports = router;