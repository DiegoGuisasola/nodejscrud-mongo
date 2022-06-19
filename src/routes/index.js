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

    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({ _id: id});

    res.redirect('/');
});

module.exports = router;