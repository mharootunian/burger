create database burgers_db;
use burgers_db;
create table burgers(
    id INTEGER auto_increment primary key,
    burger_name VARCHAR(60),
    devoured BOOLEAN
)