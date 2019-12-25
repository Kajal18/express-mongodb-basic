import Movie from '../../models/movies'
import User from '../../models/users'
import mongoose from 'mongoose'

const create = async (req, res, next) => {
    try {
        const { body } = req
        if (body.directedBy) {
            const userInstance = await User.findOne(mongoose.Types.ObjectId(body.directedBy))
            if (userInstance.role !== 'DIRECTOR')
                throw new Error('Invalid role!')
        }
        if (body.producedBy) {
            const userInstance = await User.findOne(mongoose.Types.ObjectId(body.producedBy))
            if (userInstance.role !== 'PRODUCER')
                throw new Error('Invalid role!')
        }
        const movieInstance = new Movie({
            title: body.title,
            directedBy: mongoose.Types.ObjectId(body.directedBy),
            producedBy: mongoose.Types.ObjectId(body.producedBy),
            releaseDate: body.releaseDate
        });
        const movieResponse = await movieInstance.save()
        return res.json(movieResponse)
    } catch (err) {
        return next(err)
    }
}
module.exports = create