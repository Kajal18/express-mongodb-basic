import Movie from '../../models/movies'

const searchUser = async (req, res, next) => {
    try {
        const { query } = req
        const movieSearch = await Movie.find({
            $or: [
                { 'title': { '$regex': query.search, '$options': 'i' } },
                { 'relaseDate': { '$regex': query.search, '$options': 'i' } }
            ]
        })
        return res.status(200).json(movieSearch)
    } catch (err) {
        return next(err)
    }
}

module.exports = searchUser