const dotenv = require('dotenv');
const { poolMax } = require('oracledb');
dotenv.config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT,
  },
  oracle: {
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNSTR,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0,
  },
};
