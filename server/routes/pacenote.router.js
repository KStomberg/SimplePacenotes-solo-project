const express = require('express');
const { query } = require('../modules/pool');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
    console.log('Query param for get pacenote is', req.params);
    const queryString = `	SELECT * FROM "pacenote" WHERE "course_id" = $1
     ORDER BY "id" ASC;`;
    pool
        .query(queryString, [req.params.id])
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error in GET pacenote', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    const pacenote = req.body;
    const insertPacenoteQuery = 
    `INSERT INTO "pacenote" 
    (
    "course_id",
    "turn_severity", 
    "cut_option", 
    "continue_option", 
    "turn_direction", 
    "jump", 
    "caution",
    "flat",
    "loose",
    "distance",
    "note"
   )
VALUES (
$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
)
RETURNING "id";`;

pool
    .query(insertPacenoteQuery, [
        pacenote.courseId,
        pacenote.turnSeverity,
        pacenote.into,
        pacenote.cut,
        pacenote.direction,
        pacenote.jump,
        pacenote.loose,
        pacenote.caution,
        pacenote.flat,
        pacenote.distance,
        pacenote.note
    ])
    .then((result) => {
        console.log('New pacenote ID:', result.rows[0].id); //ID is here
    })
    .catch((error) => {
        console.log('error in POST pacenote', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    console.log('Query param for delete pacenote is', req.params);
    const queryString = `DELETE FROM "pacenote" WHERE "id" = $1`
    pool
        .query(queryString, [req.params.id])
        .then((result) => {
            console.log('Result of delete:', result);
        })
        .catch((error) => {
            console.error('Error in DELETE pacenote', error);
            res.sendStatus(500);
        });
});

module.exports = router;