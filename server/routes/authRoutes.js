const express = require('express');
const router =express.Router();
 
const {userRegisterController,userLoginController} = require('../controllers/auth')

router.post('/register', userRegisterController)
router.post('/login',userLoginController)



module.exports = router; 