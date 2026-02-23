const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String
}, { strict: false });


const transportSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String
}, { strict: false });

const hotelSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String
}, { strict: false });


const citySchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String,
  places: [placeSchema],
  transport: [transportSchema],
  hotels: [hotelSchema]
}, { strict: false });

const countrySchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  image: String,
  cities: [citySchema]
}, { strict: false });


const dataSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: "699b888d01e606f8c328f85a"
  },
  countries: [countrySchema]
}, {
  strict: false,
  collection: 'Data'
});

module.exports = mongoose.model('Data', dataSchema);