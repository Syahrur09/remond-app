const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

//Koneksi db
const connectDB = async() => {
  try {
    await mongoose.connect(db, {useNewUrlParser: true});

    console.log('MongoDB Connected ...')
  } catch(err) {
    console.error(err.message);

    //exit process with failure
    process.exit(1);
  }
}

//exports module
module.exports = connectDB;