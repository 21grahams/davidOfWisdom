const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World YEEE!')
})

app.listen(port, () => {
  console.log(`Papa Kirsh App listening at http://localhost:${port}`)
})