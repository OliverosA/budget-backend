const Transac = require("../models/transac");

module.exports.createTransac = async (req, res, next) => {
  const args = {
    person: req.person.person,
    amount: req.body.amount,
    description: req.body.description,
    bankaccount: req.body.bankaccount,
    category: req.body.category,
    currency: req.body.currency,
    trtype: req.body.trtype,
  };
  try {
    await Transac.create(args);
    res.status(200).json({ message: "Transaction created!" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getTransactions = async (req, res, next) => {
  const args = {
    person: req.person.person,
  };
  try {
    const { rows } = await Transac.fetchAll(args);
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getAccountTransactions = async (req, res, next) => {
  const args = {
    person: req.person.person,
    bankaccount: req.body.bankaccount,
  };
  try {
    const { rows } = await Transac.fetchById(args);
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.getIncomeSummary = async (req, res, next) => {
  const args = {
    person: req.person.person,
    bankaccount: Number(req.params.id),
  };

  try {
    const { rows } = await Transac.getIncomeSum(args);
    const { incomes_summary } = rows[0];
    res.status(200).json({ data: incomes_summary.toFixed(2) });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports.getExpenseSummary = async (req, res, next) => {
  const args = {
    person: req.person.person,
    bankaccount: Number(req.params.id),
  };
  try {
    const { rows } = await Transac.getExpenseSum(args);
    const { expenses_summary } = rows[0];
    res.status(200).json({ data: expenses_summary.toFixed(2) });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
