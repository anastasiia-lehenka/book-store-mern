import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signNewToken = data => {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '6h' });
};

export const decodeToken = token => {
    return jwt.verify(token, process.env.TOKEN_SECRET);
};

export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (password1, password2) => {
    return bcrypt.compare(password1, password2);
};
