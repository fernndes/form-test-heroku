const pg = require("pg");
require("dotenv").config();

const client = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATA,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = client;