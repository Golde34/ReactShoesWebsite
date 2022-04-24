const db = require('../models');
const data = require('../dataimport');
const expressAsyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils');
const e = require('express');

module.exports.seed = expressAsyncHandler(async (req, res) => {
    const create = await db.users.bulkCreate(data.users);
    res.send({ create });
})

module.exports.signin = expressAsyncHandler(async (req, res) => {
    const user = await db.users.findOne({
        where: {
            userEmail: req.body.email,
        }
    });

    if (user) {
        if (bcrypt.compareSync(req.body.password, user.userPassword)) {
            res.send({
                id: user.idUser,
                Fname: user.userFname,
                Lname: user.userLname,
                email: user.userEmail,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({ message: ' Incorrect email or password.' });
})

module.exports.register = expressAsyncHandler(async (req, res) => {
    const check = await db.users.findOne({
        where: {
            userEmail: req.body.email,
        }
    })
    if (check) {
        res.send({ message: "Account has been used." });
    } else {
        const user = await db.users.create({
            userFname: req.body.fname,
            userLname: req.body.lname,
            userEmail: req.body.email,
            userPhone: req.body.phone,
            userPassword: bcrypt.hashSync(req.body.password, 8),
        });

        res.send({
            id: user.idUser,
            Fname: user.userFname,
            Lname: user.userLname,
            email: user.userEmail,
            isAdmin: user.isAdmin,
            token: generateToken(user),
        });
    }
});

module.exports.account = expressAsyncHandler(async (req, res) => {
    const oldPassword = req.body.oldPassword || '';
    const newPassword = req.body.newPassword || '';
    const user = await db.users.findOne({
        where: {
            idUser: req.user.id,
        }
    });
    if (user) {
        if (req.body.Fname) {
            user.userFname = req.body.Fname;
        }
        if (req.body.Lname) {
            user.userLname = req.body.Lname;
        }
        if (req.body.phone) {
            user.phone = req.body.phone;
        }
        if (req.body.address) {
            user.address = req.body.address;
        }
        if (oldPassword && newPassword) {
            if (bcrypt.compareSync(oldPassword, user.userPassword)) {
                user.userPassword = bcrypt.hashSync(newPassword, 8);
                user.save();
                res.send({
                    id: user.idUser,
                    email: user.userEmail,
                    Fname: user.userFname,
                    Lname: user.userLname,
                    phone: user.userPhone,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                });
                return;
            }
            else {
                res.status(401).send({ message: "Incorrect password." });
                return;
            }
        }
        const updateUser = user.save();
        res.send({
            id: user.idUser,
            email: user.userEmail,
            Fname: user.userFname,
            Lname: user.userLname,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        });
    }
});

module.exports.getId = expressAsyncHandler(async (req, res) => {
    const user = await db.users.findOne(
        {
            where: { idUser: req.params.id }
        });
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User Not Found' });
    }
});

module.exports.listUser = expressAsyncHandler(async (req, res) => {
    const limit = 10;
    const search = req.query.search || '';
    const page = req.query.page >= 0 ? req.query.page : 0;
    const offset = page ? parseInt(page * limit) : 0;
    const users = await db.users.findAll({
        offset: offset,
        limit: limit,
    });
    const pages = await db.users.count();
    const totalPages = Math.ceil(pages / limit);
    res.send({ users, totalPages });
})

// module.exports.import = expressAsyncHandler(async (req, res) => {
//     const create = await db.users.bulkCreate(data1.users);
//     res.send({create});
// })

module.exports.check = (req, res) => {
    res.send(req.body);
};

module.exports.delete = expressAsyncHandler(async (req, res) => {
    const userId = req.query.idUser;
    const user = await db.users.findOne({
        where: idUser = userId
    });
    if (user) {
        if (user.isAdmin) {
            res.status(404).send({ message: 'Cannot delete admin account.' });
            return;
        } else {
            const deleteUser = await user.destroy();
            res.send({ message: 'User Deleted', user: deleteUser });
        }
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

