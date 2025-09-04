const express = require('express');
const router = express.Router();
const main = require('../controllers/Post')




router.route('/').get(main.getpost)
router.route('/').post(main.addpost)













module.exports = router;