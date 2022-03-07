const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: 'string' },
  description: { type: 'string' },
  imageUrl: { type: 'string' },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
