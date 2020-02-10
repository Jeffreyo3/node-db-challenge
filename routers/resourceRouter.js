const express = require('express');

const Resources = require('../models/projectModel.js');

const router = express.Router();


// GET
router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to get the resources from the database.", error: err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Resources.getResourcesById(id)
        .then(resource => {
            if (resource.length) {
                res.status(200).json(resource);
            } else {
                res.status(400).json({ message: `No item with that ID was found` });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to get the resource from the database.", error: err });
        })
});

// ADD
router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.addResource(resourceData)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: "An error occured while trying to add the resource to the database.", error: err });
        });
});


module.exports = router;