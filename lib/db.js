var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var username = "User"
var password = "Password"
var address = '@ds039860.mongolab.com:39860/jeromeprattdb';
connect();

// Connect to mongo
function connect() {
    var url = 'mongodb://' + username + ':' + password + address;
    mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}
