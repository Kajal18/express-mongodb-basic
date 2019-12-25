import Review from '../../models/reviews'
import Movie from '../../models/movies'
import User from '../../models/users'
import mongoose from 'mongoose'

const create = async (req, res, next) => {
    try {
        const { body } = req
        if (body.movieId) {
            const movieInstance = await Movie.findOne(mongoose.Types.ObjectId(body.movieId))
            if (!movieInstance)
                throw new Error('Movie not found!')
        }
        if (body.commentedBy) {
            const userInstance = await User.findOne(mongoose.Types.ObjectId(body.commentedBy))
            if (!userInstance || userInstance.isDisabled)
                throw new Error('User not found!')
        }
        const reviewInstance = new Review({
            comment: body.comment,
            stars: body.stars,
            commentedBy: mongoose.Types.ObjectId(body.commentedBy),
            movieId: mongoose.Types.ObjectId(body.movieId)
        });
        const reviewResponse = await reviewInstance.save()
        return res.json(reviewResponse)
    } catch (err) {
        return next(err)
    }
}
module.exports = create