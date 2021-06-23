var FlightModel = require('../models/flight.js');

/**
 * flightController.js
 *
 * @description :: Server-side logic for managing flights.
 */
module.exports = {

    /**
     * flightController.list()
     */
    list: function (req, res) {
        FlightModel.find(function (err, flights) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting flight.',
                    error: err
                });
            }

            return res.json(flights);
        });
    },

    /**
     * flightController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        FlightModel.findOne({_id: id}, function (err, flight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting flight.',
                    error: err
                });
            }

            if (!flight) {
                return res.status(404).json({
                    message: 'No such flight'
                });
            }

            return res.json(flight);
        });
    },

    /**
     * flightController.create()
     */
    create: function (req, res) {
        var flight = new FlightModel({
			date : req.body.date,
			source : req.body.source,
			destination : req.body.destination,
			airline : req.body.airline,
			duration : req.body.duration,
            maxWeight : req.body.maxWeight,
            lowCost : req.body.maxWeight,
            luxury : req.body.luxury,
            comfortable : req.body.comfortable,
            direct : req.body.direct 
        });

        flight.save(function (err, flight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating flight',
                    error: err
                });
            }

            return res.status(201).json(flight);
        });
    },

    /**
     * flightController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        FlightModel.findOne({_id: id}, function (err, flight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting flight',
                    error: err
                });
            }

            if (!flight) {
                return res.status(404).json({
                    message: 'No such flight'
                });
            }

            flight.date = req.body.date ? req.body.date : flight.date;
			flight.source = req.body.source ? req.body.source : flight.source;
			flight.destination = req.body.destination ? req.body.destination : flight.destination;
			flight.airline = req.body.airline ? req.body.airline : flight.airline;
			flight.duration = req.body.duration ? req.body.duration : flight.duration;
			flight.maxWeight = req.body.maxWeight ? req.body.maxWeight : flight.maxWeight;
            flight.lowCost = req.body.maxWeight ? req.body.maxWeight : flight.maxWeight;
            flight.luxury = req.body.luxury ? req.body.luxury : flight.luxury;
            flight.comfortable = req.body.comfortable ? req.body.comfortable : flight.comfortable;
            flight.direct = req.body.direct ? req.body.direct : flight.direct;
            flight.save(function (err, flight) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating flight.',
                        error: err
                    });
                }

                return res.json(flight);
            });
        });
    },

    /**
     * flightController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        FlightModel.findByIdAndRemove(id, function (err, flight) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the flight.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
