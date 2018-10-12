let createDb = (dbName) => `CREATE DATABASE IF NOT EXISTS ${dbName}`;

module.exports = {createDb};