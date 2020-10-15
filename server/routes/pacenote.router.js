const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    const pacenote = req.body;
    const insertPacenoteQuery = 
    `INSERT INTO "pacenote" 
    (
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
$1, $2, $3, $4, $5, $6, $7, $8, $9, $10
)
RETURNING "id";`;

pool
    .query(insertPacenoteQuery, [
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
})

module.exports = router;