const router = require('express').Router();
let Answer = require('../models/answer.model');

router.route('/').get((req, res) => {
    Answer.find()
    .then(answer => res.json(answer))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;