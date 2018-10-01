const express = require('express');
const httpShutdown = require('http-shutdown');

const config = require('./config');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/items', (req, res) => {
    const items = [
        {
            id: 1,
            name: "Mountain Dew",
            qty: 2,
            costPerUnit: 1.8
        },
        {
            id: 2,
            name: "Desperados",
            qty: 6,
            costPerUnit: 2.5833
        },
        {
            id: 3,
            name: "Jack Daniels",
            qty: 4,
            costPerUnit: 3.35
        }
    ];

    res.json(items);
});


app.get('/randoms', (req, res) => {
    const values = [];

    for (let counter = 0; counter < 4; counter++) {
        values.push(Math.random());
    }

    res.json(values);
});


const server = httpShutdown(app.listen(config.PORT));
server.host = `http://localhost:${config.PORT}`;

module.exports = server;
