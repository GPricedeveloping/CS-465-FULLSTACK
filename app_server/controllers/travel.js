const Trip = require('../models/travlr');

const travel = async (req, res) => {
  try {
    const trips = await Trip.find();

    res.render('travel', {
      title: 'Travlr Getaways',
      trips
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error retrieving trips');
  }
};

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving trips' });
  }
};

module.exports = {
  travel,
  tripsList
};