import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    comment: { type: String },
    stars: { type: Number },
    commentedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },
})

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review