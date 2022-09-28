const { pool } = require("../utils/db");

module.exports.create = ({
  amount,
  description,
  bankaccount,
  category,
  currency,
  trtype,
}) => {
  const bindings = {
    amount,
    description,
    bankaccount,
    category,
    currency,
    trtype,
  };

  const SQL_INSERT_TRANSAC = `INSERT INTO 
                                TRANSAC (
                                    TRANSAC, 
                                    AMOUNT,
                                    DESCRIPTION,
                                    BANKACCOUNT,
                                    CATEGORY,
                                    CURRENCY,
                                    TRTYPE
                                )
                                VALUES (
                                    SQ_TRANSAC.NEXTVAL,
                                    :amount, 
                                    :description, 
                                    :bankaccount,
                                    :category,
                                    :currency,
                                    :trtype
                                )`;
  return pool(SQL_INSERT_TRANSAC, bindings, { autoCommit: true });
};

module.exports.fetchAll = ({ person }) => {
  const bindings = { person };
  const SQL_SELECT_TRANSACTIONS = `SELECT 
                                TRANSAC AS "transac", 
                                AMOUNT AS "amount",
                                DESCRIPTION AS "description",
                                BANKACCOUNT AS "bankaccount",
                                CATEGORY AS "category",
                                CURRENCY AS "currency",
                                TRTYPE AS "trtype", 
                                TO_CHAR(ADD_DATE, 'YYYY-MM-DD') AS "add_date"
                                FROM TRANSAC
                                WHERE PERSON = :person`;
  return pool(SQL_SELECT_TRANSACTIONS, bindings);
};

module.exports.fetchById = ({ person, bankaccount }) => {
  const bindings = { person, bankaccount };
  const SQL_SELECT_ACCOUNTTRANSCTIONS = `SELECT 
                                        tr.TRANSAC AS "transac",
                                        tr.AMOUNT AS "amount",
                                        tr.DESCRIPTION AS "description",
                                        tr.BANKACCOUNT AS "bankaccount",
                                        tr.CATEGORY AS "category",
                                        tr.CURRENCY AS "currency",
                                        tr.TRTYPE AS "trtype",
                                        TO_CHAR(tr.ADD_DATE , 'YYYY-MM-DD') AS "add_date",
                                        pe.PERSON AS "person"
                                        FROM TRANSAC tr, PERSON pe
                                        WHERE pe.PERSON = :person;`;
  return pool(SQL_SELECT_ACCOUNTTRANSCTIONS, bindings);
};

module.exports.getIncomeSum = ({ person, bankaccount }) => {
  const bindings = { person, bankaccount };
  const SQL_SELECT_INCOMESUM = `SELECT DISTINCT 
                                NVL(incomes_summary(:bankaccount, :person), 0) AS "incomes_summary"
                                FROM TRANSAC`;
  return pool(SQL_SELECT_INCOMESUM, bindings);
};

module.exports.getExpenseSum = ({ person, bankaccount }) => {
  const bindings = { person, bankaccount };
  const SQL_SELECT_EXPENSESUM = `SELECT DISTINCT 
                                NVL(expenses_summary(:bankaccount, :person), 0) AS "expenses_summary"
                                FROM TRANSAC`;
  return pool(SQL_SELECT_EXPENSESUM, bindings);
};
