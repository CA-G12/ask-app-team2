const connection = require('../config/connection');

const getSpecifcUserProfile = (username) => connection.query(`select questions.content, questions.reply, users.username, users.avatar from questions join users on questions.user_id =
users.id where users.username = '${username}' && questions.reply not null`);

module.exports = getSpecifcUserProfile;
