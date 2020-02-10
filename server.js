const express = require('express');

const ProjectRouter = require('./routers/projectRouter');

const server = express();

server.use(express.json());
server.use('./api/projects', ProjectRouter);

module.exports = server;