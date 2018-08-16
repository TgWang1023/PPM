mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ppm');
mongoose.Promise = global.Promise;