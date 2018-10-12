let createDb = (dbName) => `CREATE DATABASE IF NOT EXISTS ${dbName}`;
let createTable = (tableName) => `CREATE TABLE IF NOT EXISTS ${tableName} (
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    number VARCHAR(255) NOT NULL
)`;

let insertContact = (tableName, address, name, number) => `INSERT INTO ${tableName} (name, address, number) VALUES ('${name}', '${address}', '${number}')`;
let fetchAllContacts = (tableName) => `SELECT * FROM ${tableName}`;

module.exports = {createDb, createTable, insertContact, fetchAllContacts};