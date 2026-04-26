const express = require('express');
const router = express.Router();

// 🔥 IMPORTANT: correct path to controller
const ctrlTrips = require('../controllers/trips');

// ==============================
// TEST ROUTE (optional but useful)
// ==============================
router.get('/test', (req, res) => {
  res.send('API is working');
});

// ==============================
// GET ALL TRIPS
// ==============================
router.get('/trips', ctrlTrips.tripsList);

// ==============================
// GET SINGLE TRIP
// ==============================
router.get('/trips/:tripCode', ctrlTrips.tripsFindCode);

// ==============================
// POST
// ==============================
router.post('/trips', ctrlTrips.tripsAddTrip);

// ==============================
// PUT
// ==============================
router.put('/trips/:tripCode', ctrlTrips.tripsUpdateTrip);

// ==============================
// DELETE
// ==============================
router.delete('/trips/:tripCode', ctrlTrips.tripsDelete);

module.exports = router;