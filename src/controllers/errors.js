const { join } = require('path');
const { readFile } = require('fs');

const notFound = (req, res, next) => {
  readFile(join(__dirname, '..', '..', 'public', 'pages', '404', 'index.html'), 'utf-8', (err, data) => {
    if (err) next(err);
    res.status(404).send(data);
  });
};

const serverError = (err, req, res, next) => {
  readFile(join(__dirname, '..', '..', 'public', 'pages', '500', 'index.html'), 'utf-8', (error, data) => {
    if (error) next(error);
    res.status(500).send(data);
  });
};

module.exports = {
  notFound,
  serverError,
};
