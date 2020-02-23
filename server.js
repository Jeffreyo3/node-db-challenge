const express = require('express');

const ProjectRouter = require('./routers/projectRouter');
const ResourceRouter = require('./routers/resourceRouter');
const TaskRouter = require('./routers/taskRouter');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) => {
    res.send('<h2>jeffreyo3\'s Project-Task-Resource API is alive!</h2>')
})

server.get('/api/', (req,res) => {
    res.send('<div><h3>Use a resource endpoint "/api/..."</h3><ul><li>projects</li><li>resources</li><li>tasks</li></ul></div>')
})

module.exports = server;