require('dotenv').config();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const addUserQuery = require('../database/queries/signup');
const getAllUsers = require('../database/queries/getAllUsersQuery');

const hashPassword = (password) => bcrypt.hash(password, 12);

const validateSignupForm = Joi.object({
  username: Joi.string().alphanum().min(5).max(20)
    .required(),
  fname: Joi.string().regex(/[a-zA-Z]*/),
  lname: Joi.string().regex(/[a-zA-Z]*/),
  email: Joi.string().email().regex(/^[a-zA-Z0-9]?.*@[a-zA-z0-9]{1,}\.[a-zA-Z]{1,}$/).required(),
  avatar: Joi.string().required(),
  cover: Joi.string().required(),
  password: Joi.string().regex(/^(?=.+[A-Z])(?=.+[a-z])(?=.+[0-9])[a-zA-Z0-9]{8,}$/).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')),
  phone: Joi.string().length(10),
});

const addUser = (req, res, next) => {
  hashPassword(req.body.password)
    .then((hashed) => {
      validateSignupForm.validateAsync(req.body).then(() => {
        addUserQuery({ ...req.body, password: hashed })
          .then((data) => res.status(201).json(data.rows))
          .catch((err) => next(err));
      }).catch((err) => next(err));
    }).catch((err) => next(err));
};

const validatelogin = Joi.object({
  username: Joi.string().alphanum().min(5).max(20)
    .required(),
  password: Joi.string()
    .regex(/^(?=.+[A-Z])(?=.+[a-z])(?=.+[0-9])[a-zA-Z0-9]{8,}$/)
    .required(),
});

const generatetoken = (user) => jwt.sign({ id: user.id, username: user.name }, process.env.SECRET_KEY, {
  expiresIn: '1d',
});

const login = (req, res, next) => {
  const { username, password } = req.body;
  validatelogin.validateAsync(req.body).then(() => {
    getAllUsers(username).then((data) => {
      const hashedPassword = data.rows[0].password;
      bcrypt.compare(password, hashedPassword).then((user) => {
        if (user) {
          const token = generatetoken(user);
          res.cookie('token', token).send();
        } else res.status(401).json({ mg: 'wrong credintioanls' });
      });
    }).catch((err) => next(err));
  }).catch((err) => next(err));
};

module.exports = {
  addUser,
  hashPassword,
  login,
};
