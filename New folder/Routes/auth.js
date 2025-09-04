const express = require('express');
const router = express.Router();
const main = require('../controllers/auth');




router.route('/register').post(main.register)
router.route('/login').post(main.login)
router.route('/logout').post(main.logout)









module.exports = router;