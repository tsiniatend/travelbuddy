const fetch = import('node-fetch');
const cors = require("cors")
const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

const connection = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    port:  process.env.DB_port,
    password: process.env.DB_password,
    database: process.env.DB_database 
});

console.log(process.env.DB_host)

app.get('/', (req, res) => {
    connection.query('SELECT * FROM friends', (err, rows, fields) => {
        if (err) throw err;
        else if (rows == []) {
            res.status(404).send('hit up drake');
        }
        res.send(rows);
    });
});

app.post('/friends', (req, res) => {
    connection.query("INSERT INTO friends (first_name, last_name, phone_num ) VALUES (?, ?, ?);", [req.body.first_name,req.body.last_name,req.body.phone_num], (err, rows, fields) => {
        console.log(req.body);
        if (err) throw err;
        res.redirect('back');
    });
});