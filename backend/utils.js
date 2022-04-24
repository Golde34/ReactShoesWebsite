const jwt = require('jsonwebtoken');
const JWT_SECRET_STRING = 'Golde_Frank_thebezt';

exports.generateToken = (user) => {
    return jwt.sign(
        {
            id: user.idUser,
            fname: user.userFname,
            email: user.userEmail,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SECRET || JWT_SECRET_STRING,
        {
            expiresIn: '30d',
        }
    );
};

exports.isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); //Bearer XXXX
        jwt.verify(
            token, 
            process.env.JWT_SECRET || JWT_SECRET_STRING,
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid token'});
                } else {
                    req.user = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({message: 'No token'});
    }
};

exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Admin Token'});
    }
};