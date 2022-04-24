const express = require("express");
const db = require("../models");
const router = express.Router();
const data1 = require("../data1");
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");
const { generateToken, isAuth, isAdmin} = require('../utils');
const userController = require("../controllers/accountController");


router.get("/users", (req, res) => {
    db.users.findAll().then(users => res.send(users));
});

router.post("/signin", userController.signin);

router.post("/register", userController.register);

router.put("/account", isAuth, userController.account);

router.get('/:id',userController.getId );

/* adminn */
router.post('/check', userController.check);

router.get('/', isAuth, isAdmin, userController.listUser);

router.delete('/delete', userController.delete);

router.get('/seed', userController.seed);

module.exports = router;