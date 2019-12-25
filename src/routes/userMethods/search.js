import User from '../../models/users'

const searchUser = async (req, res, next) => {
    try {
        const { query } = req
        const userSearch = await User.find({
            $or: [
                { 'name': { '$regex': query.search, '$options': 'i' } },
                { 'email': { '$regex': query.search, '$options': 'i' } },
                { 'role': { '$regex': query.search, '$options': 'i' } },

            ]
        })
        return res.status(200).json(userSearch)
    } catch (err) {
        return next(err)
    }
}

module.exports = searchUser