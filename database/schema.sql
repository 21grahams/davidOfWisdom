-- Database: david

DROP DATABASE IF EXISTS david;

CREATE DATABASE david;

\c david;

DROP TABLE IF EXISTS sayings;

CREATE TABLE sayings (
  id SERIAL PRIMARY KEY,
  description VARCHAR(1000)
);