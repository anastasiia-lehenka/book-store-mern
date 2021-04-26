import { comparePasswords, encryptPassword, signNewToken} from '../helpers.js';
import { validateUser } from '../validation.js';
import User from '../models/User.js';

export const register = async (req, res) => {
    try {
        const {username, password} = req.body;

        const validationResult = validateUser({username, password});
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.details[0].message });
        }

        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res.status(400).json({ message: 'Failed to register. User with this username already exists'});
        }

        const encryptedPassword = await encryptPassword(password);
        const user = new User({username, password: encryptedPassword});
        const newUser = await user.save();

        res.json(newUser);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

export const logIn = async (req, res) => {
    try {
        const {username, password} = req.body;
        const existingUser = await User.findOne({username});
        if (!existingUser) {
            return res.status(400).json({ message: 'Failed to login. Incorrect username or password'});
        }

        const isPasswordCorrect = await comparePasswords(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Failed to login. Incorrect username or password'});
        }

        const token = signNewToken({id: existingUser._id});

        res.json({token, username});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
