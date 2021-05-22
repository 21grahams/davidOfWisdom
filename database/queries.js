const pool = require('./index.js');

//===========================
/////// GET ALL DATA ////////
//===========================

// get request query //
const getNewSayings = (id, cb) => {
  pool.query('SELECT * FROM sayings', (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// post request query //
const postNewSayings = (data, cb) => {
  pool.query('INSERT INTO sayings (description) VALUES ($1)', data, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// delete request query //
const deletePost = (id, cb) => {
  console.log('id in database: ', id)
  pool.query(`DELETE FROM sayings WHERE id = ${id}`, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports = {
  getNewSayings,
  postNewSayings,
  deletePost
}