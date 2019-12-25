import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: { type: String },
    directedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    producedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    releaseDate: { type: Date },
})

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie