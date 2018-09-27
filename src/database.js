const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/merm-tasks';

mongoose.connect(URI, {useNewUrlParser: true})
  .then(db => console.log('Database is connected'))
  .catch(err => console.log(err));
  
  module.exports = mongoose;
