const express = require('express');
const router = express.Router();

// Schema
const Task = require('../models/task');

// Routes
router.get('/', (req, res) => {
    // res.send('Hello world');
    res.render('index');
});

router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send('received');
});

module.exports = router;