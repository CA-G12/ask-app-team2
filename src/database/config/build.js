const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const build = () => {
  const sql = {
    text: readFileSync(join(__dirname, 'database.sql')),
  };
  return connection.query(sql);
};

module.exports = build;
