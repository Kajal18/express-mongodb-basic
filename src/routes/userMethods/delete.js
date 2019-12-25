import User from '../../models/users'
import Movie from '../../models/movies'
import Review from '../../models/reviews'


const deleteUser = async (req, res, next) => {
    try {
        const { params } = req
        const userInstance = await User.findOne({ _id: params.id })
        if (userInstance) {
            const movieInstance = await Movie.find({ $or: [{ directedBy: params.id }, { producedBy: params.id }] })
            if (movieInstance) {
                // await Movie.updateMany({ $or: [{ directedBy: params.id }, { producedBy: params.id }] }, { $set: { $or: [{ directedBy: null }, { producedBy: null }] } })
            }
            const reviewInstance = await Review.find({ commentedBy: params.id })
            if (reviewInstance) {
                await Review.updateMany({ commentedBy: params.id }, { $set: { commentedBy: null } })
            }
            await User.remove({ _id: params.id })
        }
        else {
            throw new Error('User does not exists')
        }
        return res.status(200).json('SUCCESS')
    } catch (err) {
        console.log(err)
        return next(err)
    }

}

module.exports = deleteUser