//on terminal go to psql -U postgres

const Pool = require("pg").Pool; // this will allow us to configure with postgresql

require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const pool = new Pool(devConfig);

module.exports = pool;

// {
//   user: "postgres",
//   password: "password",
//   host: "localhost",
//   database: "pernstack",
//   port: 5432,
// }
