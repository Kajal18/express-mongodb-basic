import Movie from '../../models/movies'

const list = async (req, res, next) => {
    const review = await Movie.find().populate([{
        path: 'producedBy',
        model: 'User',
    },
    {
        path: 'directedBy',
        model: 'User',
    }]).exec()
    return res.json(review)
}
module.exports = list