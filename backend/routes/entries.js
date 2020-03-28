const router = require('express').Router();
let Entry = require('../models/entry.model');

router.get('/', (req, res) => {
    Entry.find()
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.post('/add', (req, res) => {
    const username = req.body.username;
    const task = req.body.task;
    const priority = req.body.priority;
    const date = Date.parse(req.body.date);

    const newEntry = new Entry({

        username,
        task,
        priority,
        date,
        
    });

    newEntry.save()
    .then(() => res.json('Entries added!'))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.get('/:id', (req, res) => {
    Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.delete('/:id', (req, res) => {
    Entry.findByIdAndDelete(req.params.id)
    .then(entry => res.json('Entry Deleted!'))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.post('/update/:id', (req, res) => {
    Entry.findById(req.params.id)
    .then(entry => {
        entry.username = req.body.priority;
        entry.task = req.body.task;
        entry.priority = req.body.priority;
        entry.date = Date.parse(req.body.date);

        entry.save()
        .then(() => res.json('Entry updated'))
        .catch(err => res.status(400).json(`Error : ${err}`))
    })
    .catch(err => res.status(400).json(`Error : ${err}`))
});

module.exports = router