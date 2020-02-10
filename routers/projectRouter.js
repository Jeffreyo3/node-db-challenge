const express = require('express');

const Projects = require('../models/projectModel.js');

const router = express.Router();

// GET
router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to get the projects from the database.", error: err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Projects.getProjectsById(id)
        .then(project => {
            if (project.length) {
                res.status(200).json(project);
            } else {
                res.status(400).json({ message: `No item with that ID was found` });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to get the project from the database.", error: err });
        })
});

// ADD
router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to add the project to the database.", error: err });
        });
});

module.exports = router;