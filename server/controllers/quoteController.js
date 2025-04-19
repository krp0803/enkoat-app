const Quote = require('../models/Quote');

// POST /api/quotes
exports.createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(201).json(quote);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/quotes
// optional query: ?state=AZ or ?roofType=Metal
exports.getQuotes = async (req, res) => {
  const { state, roofType } = req.query;
  const filter = {};
  if (state)    filter.state = state;
  if (roofType) filter.roofType = roofType;

  try {
    const quotes = await Quote.find(filter).sort({ date: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};