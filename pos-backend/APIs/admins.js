const express = require('express');
const router = express.Router();
const adminsController = require('../controllers/adminsController');

router.route('/add').post(adminsController.addAdmin)


module.exports = router;