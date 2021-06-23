const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/:useId', userController.get);

router.get('/:email/:password', userController.login);

router.post('/post', userController.post);

router.put('/update', userController.update);

router.delete('/delete', userController.delete);

module.exports = router;
