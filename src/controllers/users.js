const getAllUsersDataQuery = require('../database/queries/getAllUsersDataQuery');

const getUsersData = (req, res, next) => {
  console.log('here');
  const { username } = req.query;
  console.log(username);
  getAllUsersDataQuery(username)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => next(err));
};

module.exports = { getUsersData };
