import Order from '../models/Order.js';
import User from '../models/User.js';
import Book from '../models/Book.js';
import { validateOrder } from '../validation.js';

export const createOrder = async (req, res) => {
    try {
        const { username, books } = req.body;

        const validationResult = validateOrder({username, books});
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.details[0].message });
        }

        try {
            await User.findOne({username});
        } catch (err) {
            return res.status(400).json({ message: 'User with provided username not found in the database'});
        }

        for (const book of books) {
            try {
                await Book.findOne({_id: book._id });
            } catch (err) {
                return res.status(400).json({ message: `Book with id ${book._id} not found in the database`});
            }
        }

        const order = new Order({ username, books });
        const newOrder = await order.save();

        res.json(newOrder);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};
