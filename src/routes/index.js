const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    // res.send('Hello world');
    res.render('index');
});


module.exports = router;