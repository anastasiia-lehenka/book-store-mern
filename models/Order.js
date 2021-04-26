import mongoose from 'mongoose';

const BookItemSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const OrderSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    books: [BookItemSchema],
}, { versionKey: false });

export default mongoose.model('Order', OrderSchema);
