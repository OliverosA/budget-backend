const { pool } = require("../utils/db");

module.exports.create = ({
  amount,
  description,
  orig_account,
  dest_account,
}) => {
  const bindings = {
    amount,
    description,
    orig_account,
    dest_account,
  };

  const SQL_INSERT_TRANSFER = `BEGIN
                                    EXECUTE_TRANSFERS (
                                        SQ_TRANSFER.NEXTVAL,
                                        :amount,
                                        :description,
                                        :orig_account,
                                        :dest_account
                                    );
                                END;`;
  return pool(SQL_INSERT_TRANSFER, bindings, { autoCommit: true });
};
