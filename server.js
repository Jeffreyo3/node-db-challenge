const express = require('express');

const TaskRouter = require('./routers/taskRouter');

const server = express();

server.use(express.json());
server.use('./api/tasks', TaskRouter);

module.exports = server;