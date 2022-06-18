const express = require('express');
const router = express.Router();

// Schema
const Task = require('../models/task');

// Routes
router.get('/', async(req, res) => {
    const tasks = await Task.find();
    // console.log(tasks);

    // Update table
    res.render('index', {
        tasks // tasks: tasks
    });
});

router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send('received');
});

module.exports = router;