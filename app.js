import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import booksRoute from './routes/books.js';
import authRoute from './routes/auth.js';
import ordersRoute from './routes/orders.js';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(cors());
app.use('/api/books', booksRoute);
app.use('/api/auth', authRoute);
app.use('/api/orders', ordersRoute);
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


const start = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            });
        app.listen(port, () => console.log(`App has been started on port ${port}`));
    } catch (e) {
        console.log(e.message);
    }
};

start();

