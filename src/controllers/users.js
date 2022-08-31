const getAllUsersDataQuery = require('../database/queries/getAllUsersDataQuery');

const getUsersData = (req, res, next) => {
  const { username } = req.query;
  getAllUsersDataQuery(username)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => next(err));
};

module.exports = { getUsersData };
