const express = require('express');
const router = express.Router();



// Exemple de route
router.get('/', (req, res) => {
    res.send('API is running');
});

module.exports = router;