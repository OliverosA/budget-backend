const express = require("express");
const router = express.Router();
const guard = require("../guard/guard");

const { createBankAccount } = require("../controllers/bankaccount");

router.post("/bankaccount", guard, createBankAccount);

module.exports = router;
