const BankAccount = require("../models/bankaccount");

module.exports.createBankAccount = async (req, res, next) => {
  //person, account_number, balance, currency
  const args = {
    person: req.person.person,
    account_number: req.body.account_number,
    balance: req.body.balance,
    currency: req.body.currency,
  };
  try {
    await BankAccount.create(args);
    res.status(200).json({ message: "Bank Account created!" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
