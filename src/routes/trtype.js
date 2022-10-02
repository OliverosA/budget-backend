const express = require("express");
const router = express.Router();
const guard = require("../guard/guard");

const { getTransactionTypes } = require("../controllers/trtype");

router.post("/transactiontypes", guard, getTransactionTypes);

module.exports = router;
