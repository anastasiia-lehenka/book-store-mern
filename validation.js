import Joi from 'joi';

export const validateUser = data => {
    const regexPattern = /^[a-zA-Z0-9]{4,15}$/;

    const schema = Joi.object({
        username: Joi.string().min(4).max(15).required(),
        password: Joi.string().pattern(regexPattern).required(),
    });

    return schema.validate(data);
};

export const validateOrder = data => {
    const schema = Joi.object({
        username: Joi.string().required(),
        books: Joi.array().items(Joi.object({
            _id: Joi.string().required(),
            quantity: Joi.number().min(1).max(1000).required(),
        })).required(),
    });

    return schema.validate(data);
};
