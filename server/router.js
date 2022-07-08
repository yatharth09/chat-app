const express = require('express');// Typical for all express application
const router = express.Router();

router.get('/', (req, res) => {
    res.send('server is up and running');
});

module.exports = router;