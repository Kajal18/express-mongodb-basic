import User from '../../models/users'
const bcrypt = require('bcryptjs');

const create = async (req, res, next) => {
    try {
        const { body } = req
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(body.password, salt);
        const userInstance = new User({
            name: body.name,
            email: body.email,
            password: password,
            role: body.role,
            gender: body.gender
        });


        const userResponse = await userInstance.save()
        return res.json(userResponse)
    } catch (err) {
        console.log(err)
        return next(err)
    }
}


module.exports = create