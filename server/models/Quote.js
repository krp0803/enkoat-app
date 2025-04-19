const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  contractorName: { type: String, required: true },
  company:        { type: String, required: true },
  roofSize:       { type: Number, required: true },
  roofType:       { type: String, required: true },
  city:           { type: String, required: true },
  state:          { type: String, required: true },
  date:           { type: Date,   required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Quote', quoteSchema);