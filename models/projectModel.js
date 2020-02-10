const db = require('../data/dbConfig');

module.exports = {
    getProjects,
    getProjectsById,
    addProject,

    getResources,
    getResourcesById,
    addResources,

    getTasks,
    getTasksById,
    addTasks
}

// retrieving a list of projects.
function getProjects() {
    return db('projects')
}

function getProjectsById(id) {
    return db('projects').where({ id })
}

// adding projects.
function addProject(project) {
    return db('projects').insert(project)
}

// retrieving a list of resources.
function getResources() {
    return db('resources')
}

function getResourcesById(id) {
    return db('resources').where({ id })
}

// adding resources.
function addResources(resource) {
    return db('resources').insert(resource)
}

// retrieving a list of tasks.
function getTasks() {
    return db('tasks')
}

function getTasksById(id) {
    return db('tasks').where({ id })
}

// adding tasks.
function addTasks(task) {
    return db('tasks').insert(task)
}