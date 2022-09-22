const { pool } = require("../utils/db");

module.exports.create = ({
  amount,
  description,
  orig_account,
  dest_account,
  orig_currency,
  dest_currency,
}) => {
  const bindings = {
    amount,
    description,
    orig_account,
    dest_account,
    orig_currency,
    dest_currency,
  };

  const SQL_INSERT_TRANSFER = `BEGIN
                                    EXECUTE_TRANSFERS (
                                        SQ_TRANSFER.NEXTVAL,
                                        :amount,
                                        :description,
                                        :orig_account,
                                        :dest_account,
                                        :orig_currency,
                                        :dest_currency
                                    );
                                END;`;
  return pool(SQL_INSERT_TRANSFER, bindings, { autoCommit: true });
};
