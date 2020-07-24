CREATE DATABASE pernstack;

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- SERIAL is auto increment PRIMARY KEY is unique