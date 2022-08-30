require('dotenv').config();

const Joi = require('joi');
const bcrypt = require('bcrypt');

const addUserQuery = require('../database/queries/signup');

const hashPassword = (password) => bcrypt.hash(password, process.env.SECRET_KEY);

const validateSignupForm = Joi.object({
  username: Joi.string().alphanum().min(5).max(20)
    .required(),
  fname: Joi.string().regex(/[a-zA-Z]*/),
  lname: Joi.string().regex(/[a-zA-Z]*/),
  email: Joi.string().email().regex(/^[a-zA-Z0-9]?.*@[a-zA-z0-9]{1,}\.[a-zA-Z]{1,}$/).required(),
  password: Joi.string().regex(/^(?=.+[A-Z])(?=.+[a-z])(?=.+[0-9])[a-zA-Z0-9]{8,}$/).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')),
  phone: Joi.string().length(10),
});

const addUser = (req, res, next) => {
  hashPassword(req.body.password)
    .then((hashed) => {
      validateSignupForm.validateAsync(req.body).then(() => {
        addUserQuery({ ...req.body, password: hashed })
          .then((data) => res.json({ message: `${data.rowCount} rows were added successfully!!!` }))
          .catch((err) => next(err));
      }).catch((err) => next(err));
    }).catch((err) => next(err));
};

module.exports = { addUser };
