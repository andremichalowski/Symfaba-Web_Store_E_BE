const express = require("express");

const hubsRouter = require("../hubs/hubs-router");

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ serverMessage: 'Test endpoint' });
});

server.use("/api/hubs", hubsRouter);

module.exports = server;