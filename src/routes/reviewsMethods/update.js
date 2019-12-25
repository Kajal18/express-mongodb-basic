import Review from '../../models/reviews'
import mongoose from 'mongoose'

const update = async (req, res, next) => {
    try {
        const { body, query } = req
        const reviewResponse = await Review.update({ _id: query.id }, { $set: body })
        return res.json(reviewResponse)
    } catch (err) {
        return next(err)
    }
}
module.exports = update