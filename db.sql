CREATE DATABASE cms;

CREATE TABLE user_master(
    uid SERIAL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL);