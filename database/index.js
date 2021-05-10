const Pool = require('pg').Pool

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'david',
  password: 'password',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(`David's Database is running at: `, res.rows)
})

module.exports = pool;