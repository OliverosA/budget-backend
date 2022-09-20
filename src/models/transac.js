const { pool } = require("../utils/db");

module.exports.create = ({
  person,
  transac,
  amount,
  description,
  bankaccount,
  category,
  currency,
  trtype,
}) => {
  const bindings = {
    person,
    transac,
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
                                TRTYPE AS "trtype" 
                                TO_CHAR(ADD_DATE, 'YYYY-MM-DD') AS "add_date"
                                FROM TRANSAC
                                WHERE PERSON = :person`;
  return pool(SQL_SELECT_TRANSACTIONS, bindings);
};

module.exports.fetchById = ({ person, bankaccount }) => {
  const bindings = { person, bankaccount };
  const SQL_SELECT_ACCOUNTTRANSCTIONS = `SELECT 
                                TRANSAC AS "transac", 
                                AMOUNT AS "amount",
                                DESCRIPTION AS "description",
                                BANKACCOUNT AS "bankaccount",
                                CATEGORY AS "category",
                                CURRENCY AS "currency",
                                TRTYPE AS "trtype" 
                                TO_CHAR(ADD_DATE, 'YYYY-MM-DD') AS "add_date"
                                FROM TRANSAC
                                WHERE PERSON = :person
                                AND BANKACCOUNT = :bankaccount`;
  return pool(SQL_SELECT_ACCOUNTTRANSCTIONS, bindings);
};
