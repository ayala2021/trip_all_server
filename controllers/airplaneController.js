var AirplaneModel = require('./airplaneModel.js');

/**
 * airplaneController.js
 *
 * @description :: Server-side logic for managing airplanes.
 */
module.exports = {

    /**
     * airplaneController.list()
     */
    list: function (req, res) {
        AirplaneModel.find(function (err, airplanes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting airplane.',
                    error: err
                });
            }

            return res.json(airplanes);
        });
    },

    /**
     * airplaneController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AirplaneModel.findOne({_id: id}, function (err, airplane) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting airplane.',
                    error: err
                });
            }

            if (!airplane) {
                return res.status(404).json({
                    message: 'No such airplane'
                });
            }

            return res.json(airplane);
        });
    },

    /**
     * airplaneController.create()
     */
    create: function (req, res) {
        var airplane = new AirplaneModel({
			name : req.body.name,
			country : req.body.country,
			city : req.body.city
        });

        airplane.save(function (err, airplane) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating airplane',
                    error: err
                });
            }

            return res.status(201).json(airplane);
        });
    },

    /**
     * airplaneController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        AirplaneModel.findOne({_id: id}, function (err, airplane) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting airplane',
                    error: err
                });
            }

            if (!airplane) {
                return res.status(404).json({
                    message: 'No such airplane'
                });
            }

            airplane.name = req.body.name ? req.body.name : airplane.name;
			airplane.country = req.body.country ? req.body.country : airplane.country;
			airplane.city = req.body.city ? req.body.city : airplane.city;
			
            airplane.save(function (err, airplane) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating airplane.',
                        error: err
                    });
                }

                return res.json(airplane);
            });
        });
    },

    /**
     * airplaneController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AirplaneModel.findByIdAndRemove(id, function (err, airplane) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the airplane.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
