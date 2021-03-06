//on terminal go to psql -U postgres

const Pool = require("pg").Pool; // this will allow us to configure with postgresql

require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; // heroku addons

// const proConfig = {
//    process.env.DATABASE_URL, // heroku addons
// };

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = pool;

// {
//   user: "postgres",
//   password: "password",
//   host: "localhost",
//   database: "pernstack",
//   port: 5432,
// }

//heroku pg:psql -a pern-todo-app-postgresql  <-- on commandline to go into postsql on heroku
