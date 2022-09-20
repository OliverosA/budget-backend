const express = require("express");
const router = express.Router();
const guard = require("../guard/guard");

const {
  createBankAccount,
  getBankAccounts,
  getBankAccount,
} = require("../controllers/bankaccount");

router.post("/bankaccount", guard, createBankAccount);
router.get("/bankaccount", guard, getBankAccounts);
router.get("/bankaccount/:id", guard, getBankAccount);

module.exports = router;
