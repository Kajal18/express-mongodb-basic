import Movie from '../../models/movies'
import User from '../../models/users'
import mongoose from 'mongoose'

const update = async (req, res, next) => {
    try {
        const { body, query } = req
        const checkMovie = await Movie.findOne({ _id: mongoose.Types.ObjectId(query.id) })
        if (!checkMovie)
            throw new Error('Movie not found!')
        if (body.directedBy) {
            const userInstance = await User.findOne({ _id: mongoose.Types.ObjectId(body.directedBy), isDisabled: false })
            if (!userInstance)
                throw new Error('User is disabled!')
            if (userInstance.role !== 'DIRECTOR')
                throw new Error('Invalid role!')
            body.directedBy = mongoose.Types.ObjectId(body.directedBy)
        }
        if (body.producedBy) {
            const userInstance = await User.findOne({ _id: mongoose.Types.ObjectId(body.producedBy), isDisabled: false })
            if (!userInstance)
                throw new Error('User is disabled!')
            if (userInstance.role !== 'PRODUCER')
                throw new Error('Invalid role!')
            body.producedBy = mongoose.Types.ObjectId(body.producedBy)
        }
        const movieResponse = await Movie.update({ _id: query.id }, { $set: body })
        return res.json(movieResponse)
    } catch (err) {
        return next(err)
    }
}
module.exports = update