const Pool = require('pg').Pool

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'david',
  password: 'password',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('THIS IS THE DB TEST: ', err, res.rows)
  console.log(`David's Database is up and running!`)
})

module.exports = pool;