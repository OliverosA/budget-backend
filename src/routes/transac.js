const express = require("express");
const router = express.Router();
const guard = require("../guard/guard");

const {
  createTransac,
  getTransactions,
  getAccountTransactions,
} = require("../controllers/transac");

router.post("/transaction", guard, createTransac);
router.get("/transaction", guard, getTransactions);
router.get("/transaction/:id", guard, getAccountTransactions);

module.exports = router;
