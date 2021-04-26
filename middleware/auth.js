import { decodeToken } from '../helpers.js';

export const authMiddleware = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({message: 'Not authorized '});
        }

        const decodedToken = decodeToken(token.split(' ')[1]);
        if (!decodedToken) {
            return res.status(401).json({message: 'Not authorized '});
        }

        req.user = decodedToken;
        next();

    } catch (e) {
        res.status(401).json({message: e.message});
    }
};
