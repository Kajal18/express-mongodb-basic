import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/users'

const authentication = async (req, res, next) => {
    try {
        let token
        const { body } = req
        if (!body.password || !body.email) {
            throw new Error('Please provide email or password')
        }
        const userInstance = await User.findOne({ email: body.email })
        if (userInstance) {
            const compareBcrypt = bcrypt.compare(body.password, userInstance.password)
            if (compareBcrypt) {
                token = jwt.sign(body, 'secretjwt', {
                    expiresIn: '1d'
                })
            }
        }
        return res.status(200).json({
            acess_token: token
        })
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = authentication