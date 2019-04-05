### Schema

DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;
USE pizza_db;

CREATE TABLE pizzas 
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
