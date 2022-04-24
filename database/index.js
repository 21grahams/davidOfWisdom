const Pool = require('pg').Pool

const pool = new Pool({
  user: 'GrahamKirsh',
  host: 'localhost',
  database: 'david',
  password: 'password',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log('David\'s Database is running on: ', res.rows)
})

module.exports = pool;