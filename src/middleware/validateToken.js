const jwt = require('jsonwebtoken');
const User = require('../models/users')
module.exports = {
    validateToken: async (req, res, next) => {
        const authorizationHeaader = req.headers.authorization;
        let result;
        if (authorizationHeaader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            const options = {
                expiresIn: '1d',
            };
            try {
                result = jwt.verify(token, 'secretjwt', options);
                const user = await User.findOne({ email: result.email })

                //can access logged in user from any request
                req.user = user;
                next();
            } catch (err) {
                throw new Error(err);
            }
        } else {
            result = {
                error: `Authentication error. Token required.`,
                status: 401
            };
            res.status(401).send(result);
        }
    }
};