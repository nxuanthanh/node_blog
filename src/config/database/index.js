const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/fullstack_edu');
    console.log('Successfully');
  } catch (error) {
    console.log('Error:', error.message);
  }
}

module.exports = { connect };
