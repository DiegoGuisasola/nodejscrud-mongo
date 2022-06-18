const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    // res.send('Hello world');
    res.render('index');
});

router.post('/add', (req, res) => {
    console.log(req.body);
    res.send('received');
});

module.exports = router;