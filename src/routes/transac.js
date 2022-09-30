const express = require("express");
const router = express.Router();
const guard = require("../guard/guard");

const {
  createTransac,
  getTransactions,
  getAccountTransactions,
  getIncomeSummary,
  getExpenseSummary,
} = require("../controllers/transac");

router.post("/transaction", guard, createTransac);
router.get("/transaction", guard, getTransactions);
router.get("/transaction/:id", guard, getAccountTransactions);
router.post("/trasaction/incomeSummary", guard, getIncomeSummary);
router.get("/trasaction/expenseSummary/:id", guard, getExpenseSummary);

module.exports = router;
