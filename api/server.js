const express = require("express");
const helmet = require('helmet');

const hubsRouter = require("../hubs/hubs-router.js");
const db = require('../data/connection');

const server = express();
server.use(helmet())
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

server.use("/api/hubs", hubsRouter);

module.exports = server;