var express = require('express');
var router = express.Router();
var flightController = require('./flightController.js');

/*
 * GET
 */
router.get('/', flightController.list);

/*
 * GET
 */
router.get('/:id', flightController.show);

/*
 * POST
 */
router.post('/', flightController.create);

/*
 * PUT
 */
router.put('/:id', flightController.update);

/*
 * DELETE
 */
router.delete('/:id', flightController.remove);

module.exports = router;
