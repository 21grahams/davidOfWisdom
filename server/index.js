const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const axios = require('axios');
const pool = require('../database/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');

//=====================
///// Middleware //////
//=====================
app.use(express.json()); // => req.body
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(cors());

//=====================
/////// Routes ////////
//=====================
app.get('/dad', (req, res) => {
  let str = 'SELECT * from sayings'
  db.pool(str, (err, response) => {
    if (err) {
      console.log('ERROR ON SERVER SIDE: ', err);
      res.sendStatus(404);
    } else {
      res.send(results);
    }
  })
})


//=============================================
//=============================================


//=========spinning up the server=============
app.listen(port, () => {
  console.log(`Papa Kirsh App listening at http://localhost:${port}`)
})