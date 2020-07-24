//on terminal go to psql -U postgres

const Pool = require("pg").Pool; // this will allow us to configure with postgresql

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  database: "pernstack",
  port: 5432,
});

module.exports = pool;
