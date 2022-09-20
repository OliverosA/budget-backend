const express = require("express");
const router = express.Router();
const guard = require("../guard/guard");

const {
  createTransac,
  getTransactions,
  getAccountTransactions,
} = require("../controllers/transac");

router.post("/transac", guard, createTransac);
router.get("/transac", guard, getTransactions);
router.get("/transac/:id", guard, getAccountTransactions);

module.exports = router;
