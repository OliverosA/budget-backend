const oracledb = require('oracledb');
const { oracle } = require('../config/config');
const path = require('path');

// path to client
const oracleClient = path.join(
  'C:',
  'oracle_19c',
  'WINDOWS.X64_193000_db_home',
  'bin'
);

// init database
module.exports.start = async () => {
  await oracledb.createPool(oracle); // oracle is the config for db
};

// close database
module.exports.close = async () => {
  await oracledb.getPool().close(0);
};

//query handler
module.exports.pool = async (statement, binds = [], opts = {}) => {
  let conn;
  let result = [];
  opts.outFormat = oracledb.OUT_FORMAT_OBJECT;

  try {
    conn = await oracledb.getConnection();
    result = await conn.execute(statement, binds, opts);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
};