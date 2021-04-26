import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
}, { versionKey: false });

export default mongoose.model('Book', BookSchema);
