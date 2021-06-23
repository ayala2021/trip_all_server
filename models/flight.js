var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var flightSchema = new Schema({
	'date' : Date,
	'source' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'airplane'
	},
	'destination' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'airplane'
	},
	'airline' : String,
	'duration' : Number,
	'maxWeight' : Number,
	'lowCost' : Boolean,
	'luxury' : Boolean,
	'comfortable' : Boolean,
	'direct' : Boolean,
});

module.exports = mongoose.model('flight', flightSchema);
