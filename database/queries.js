const pool = require('./index.js');

//===========================
/////// GET ALL DATA ////////
//===========================

const getNewSayings = (id, cb) => {
  pool.query('SELECT * FROM sayings', (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getNewSayings
}