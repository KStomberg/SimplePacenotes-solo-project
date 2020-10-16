const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
    console.log('Query param is:', req.params);
    const queryString = `SELECT * FROM "course" WHERE "user_id" = $1`
    pool
        .query(queryString, [req.params.id])
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error in GET course', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log('req.body:', req.body);

    const insertCourseQuery = `
    INSERT INTO "course" ("user_id", "course_name")
    VALUES ($1, $2);`;
    
    pool
        .query(insertCourseQuery, [req.body.userId, req.body.newCourse])
        .then((results) => {
            console.log('New course id:', results); 
        })
        .catch((error) => {
            console.log('Error in POST course', error);
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