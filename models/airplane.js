var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var airplaneSchema = new Schema({
	'name' : String,
	'country' : String,
	'city' : String
});

module.exports = mongoose.model('airplane', airplaneSchema);
