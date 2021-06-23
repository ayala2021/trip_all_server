var express = require('express');
var router = express.Router();
var airplaneController = require('../controllers/airplaneController.js');

/*
 * GET
 */
router.get('/', airplaneController.list);

/*
 * GET
 */
router.get('/:id', airplaneController.show);

/*
 * POST
 */
router.post('/', airplaneController.create);

/*
 * PUT
 */
router.put('/:id', airplaneController.update);

/*
 * DELETE
 */
router.delete('/:id', airplaneController.remove);

module.exports = router;
