// test 2
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');
const pool = require('../database/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/queries.js')

//=====================
///// Middleware //////
//=====================
app.use(express.json()); // => req.body
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(cors());

//=====================
/////// Routes ////////
//=====================

// get request //
app.get('/dad', (req, res) => {
  let str = 'SELECT * from sayings';
  db.getNewSayings(str, (err, results) => {
    if (err) {
      console.log('ERROR WITH GET REQUEST: ', err);
      res.sendStatus(404);
    } else {
      res.send(results.rows);
    }
  });
});

// post request //
app.post('/dad', (req, res) => {
  let message = [req.body.description]
  db.postNewSayings(message, (err, results) => {
    if (err) {
      console.log('ERROR WITH POST REQUEST: ', err);
      res.sendStatus(404);
    } else {
      res.status(201).send('POSTED!')
    }
  });
});

// delete request //
app.delete('/dad/:id', (req, res) => {
  let id = req.params.id;
  db.deletePost(id, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

//=================================
/////// Spin Up The Server ////////
//=================================
app.listen(port, () => {
  console.log(`Papa Kirsh App listening at http://localhost:${port}`)
})