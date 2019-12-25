import User from '../../models/users'
import Movie from '../../models/movies'
import Reviwe from '../../models/reviews'


const deleteMovie = async (req, res, next) => {
    const { params } = req
    const movieInstance = await Movie.findOne({ _id: params.id })
    if (movieInstance) {
        const movieReviewInstance = await Reviwe.find({ movieId: params.id })
        if (movieReviewInstance) {
            await Reviwe.updateMany({ movieId: params.id }, { $set: { movieId: null } })
        }
        await Movie.remove({ _id: params.id })
    }
    else {
        throw new Error('Movie does not exists')
    }
    return res.status(200).json('SUCCESS')

}

module.exports = deleteMovie