const { join } = require('path');
const { getAllUsersDataQuery, getNewUsersDataQuery } = require('../database/queries/getAllUsersDataQuery');

const getUsersData = (req, res, next) => {
  const { username } = req.query;

  getAllUsersDataQuery(username)
    .then((data) => {
      if (data.rows.length === 0) {
        getNewUsersDataQuery(username).then((newData) => res.status(200).json(newData.rows));
      } else {
        res.status(200).json(data.rows);
      }
    })
    .catch((err) => next(err));
};

const getUserProfile = (req, res) => {
  const path = join(__dirname, '..', '..', 'public', 'pages', 'UserProfile', 'index.html');
  res.sendFile(path);
};

module.exports = { getUsersData, getUserProfile };
