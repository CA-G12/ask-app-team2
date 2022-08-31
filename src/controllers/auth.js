const Joi = require("joi");
const bcrypt = require("bcrypt");

const addUserQuery = require("../database/queries/signup");
const getAllUsers = require("../database/queries/login");


const hashPassword = (password) => bcrypt.hash(password, 12);

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

const validatelogin=Joi.object({
   username:Joi.string().alphanum().min(5).max(20).required(),
   password: Joi.string()
    .regex(/^(?=.+[A-Z])(?=.+[a-z])(?=.+[0-9])[a-zA-Z0-9]{8,}$/)
    .required(),

})
const generatetoken = (user) =>
  jwt.sign({ id: user.id, username: user.name }, "mySecretKey", {
    expiresIn: "1d",
  });

const login = (req, res) => {
  const { username, password } = req.body;
  validatelogin.validateAsync(req.body).then(()=>{
  getAllUsers(username).then((data) => {

    const hashedPassword = data.rows[0].password;
    bcrypt.compare(hashedPassword, req.body.password).then((user) => {
      if (user) {
        const token = generatetoken(user);
        res.cookie("token", token);
      } else res.status(401).json({ mg: "wrong credintioanls" });
    });
  });
})
.catch((err)=>{console.log(err)})
};

module.exports = {
  addUser,
  hashPassword,
  login,
};
