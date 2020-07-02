const mongoose = require('mongoose');

//direccion
const uri = "mongodb://localhost/mean-crud";

mongoose.connect(uri)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err) );

module.exports = mongoose;