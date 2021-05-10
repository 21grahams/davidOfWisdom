const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser')
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
app.get('/', (req, res) => {
  res.send('Hello World YEEE!')
})

app.listen(port, () => {
  console.log(`Papa Kirsh App listening at http://localhost:${port}`)
})