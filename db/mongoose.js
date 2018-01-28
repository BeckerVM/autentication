var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/api-mongo', { useMongoClient: true }).then(() => {
    console.log('db connected');
});

module.exports = mongoose;