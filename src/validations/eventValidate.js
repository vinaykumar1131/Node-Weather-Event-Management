const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string()
        .min(5)
        .max(100)
        .required(),

    description: Joi.string(),
    location: Joi.string()
        .min(2)
        .max(200),
    date: Joi.string()
        .min(2)
        .max(200),
    time: Joi.string()
        .min(2)
        .max(200)

})
module.exports = schema