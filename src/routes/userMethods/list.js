import User from '../../models/users'
import Review from '../../models/reviews'
const list = async (req, res, next) => {
    const user = await User.aggregate([
        // {
        //     "$project": {
        //         "_id": {
        //             "$toString": "$_id"
        //         }
        //     }
        // },
        {
            "$lookup": {
                from: "Movie",
                localField: "directedBy",
                foreignField: "User.id",
                as: "director"
            }
        },
    ])
    return res.json(user)
}
module.exports = list