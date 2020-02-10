const express = require('express');

const Tasks = require('../models/projectModel.js');

const router = express.Router();

// GET
router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to get the tasks from the database.", error: err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Tasks.getTasksById(id)
        .then(task => {
            if (task.length) {
                res.status(200).json(task);
            } else {
                res.status(400).json({ message: `No item with that ID was found` });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to get the task from the database.", error: err });
        })
});

// ADD
router.post('/', (req, res) => {
    const taskData = req.body;

    Tasks.addTask(taskData)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to add the task to the database.", error: err });
        });
});


module.exports = router;