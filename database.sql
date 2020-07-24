-- CREATE DATABASE pernstack;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- SERIAL is auto increment PRIMARY KEY is unique


-- cat database.sql
-- cat database.sql | heroku pg:psql -a pern-todo-app-postgresql

-- when you want to push make sure to connect them to heroku --> heroku git:remote -a pern-todo-app-postgresql
--then git push heroku master