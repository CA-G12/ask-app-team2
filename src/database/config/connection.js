const { Pool } = require('pg');

const { NODE_ENV, DATABASE_URL,  } = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV){
  case 'production':
    connectionString = DATABASE_URL;
    break;

  case 'production': 
  connectionString = DATABASE_URL;
  break;
  default:
}

const connection = new Pool({
  connectionString,
  ssl,
});
