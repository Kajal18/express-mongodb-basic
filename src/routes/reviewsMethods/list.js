import Review from '../../models/reviews'

const list = async (req, res, next) => {
    const review = await Review.find().populate({
        path: 'commentedBy',
        model: 'User',
    }).populate({
        path: 'movieId',
        model: 'Movie',
        populate: [{
            path: 'producedBy',
            model: 'User',
        },
        {
            path: 'directedBy',
            model: 'User',
        }]
    }).exec()
    return res.json(review)
}
module.exports = list