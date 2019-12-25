import User from '../../models/users'
import mongoose from 'mongoose'

const update = async (req, res, next) => {
    try {
        const { body, query } = req
        const checkUser = await User.findOne({ _id: mongoose.Types.ObjectId(query.id) })
        if (!checkUser)
            throw new Error('Movie not found!')
        if (checkUser.isDisabled)
            throw new Error('User is disabled!')
        const userResponse = await User.update({ _id: query.id }, { $set: body })
        return res.json(userResponse)
    } catch (err) {
        return next(err)
    }
}
module.exports = update