const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Query param is:');
    const queryString = `SELECT * FROM "course"`
    pool
        .query(queryString)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error in GET course', error);
            res.sendStatus(500);
        });
});


// router.get('/:id', (req, res) => {
//     console.log('Query param is:', req.params.id);
//     const queryString = `SELECT * FROM "course" WERE "user_id" = $1`
//     pool
//         .query(queryString, [req.params.id])
//         .then((results) => {
//             res.send(results.rows);
//         })
//         .catch((error) => {
//             console.log('Error in GET course', error);
//             res.sendStatus(500);
//         });
// });
module.exports = router;