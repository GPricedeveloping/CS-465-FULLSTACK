require('./db'); // run connection
const mongoose = require('mongoose'); 
const Trip = require('./travlr');
const fs = require('fs');


const trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(trips);
};

seedDB().then(async () => {
  await mongoose.connection.close();
  process.exit(0);
});