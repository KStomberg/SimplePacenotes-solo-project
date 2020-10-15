const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
    console.log('Query param is:', req.params.id);
    const queryString = `SELECT * FROM "course" WERE "user_id" = $1`
    pool
        .query(queryString, [req.params.id])
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error in GET course', err);
            res.sendStatus(500);
        });
});

module.exports = router;