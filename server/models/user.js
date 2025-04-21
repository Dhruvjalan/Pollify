

const mongoose = require('mongoose');

const expenditureSchema = new mongoose.Schema({
  title: String,
  Spent: String
});

const locationSchema = new mongoose.Schema({
  Lat: String,
  Lon: String
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  Expenditure: [expenditureSchema],
  Location: locationSchema,
  Notes: String,
  screentime_min: String,
  Todo:{ type: [String],default:['dowork']}
});

UserModel = mongoose.model('User', userSchema);
module.exports = UserModel
