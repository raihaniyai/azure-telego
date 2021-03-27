const postQuery = `
  UPDATE "user" u SET balance = balance + $1 where u.id = $2
  RETURNING balance
`;
const getQuery = `
  SELECT u.first_name, u.last_name, u.balance FROM "user" u 
  WHERE u.id = $1
`;

const updateBalance = (req, res, client) => {
  const userID = req.params.userID;
  const balance = req.body.balance;

  if (!userID) {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please input User ID",
      data: req.body,
    });
    return
  }

  if (!balance) {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please input the Balance",
      data: req.body,
    });
    return
  }

  console.log(balance)

  // update balance
  client.query(postQuery, [balance, userID], (err, transactionResult) => {
    const updatedBalance = transactionResult ? transactionResult.rows[0].balance : -1;

    if ((err && !transactionResult) || updatedBalance < 0) {
      res.status(res.statusCode).send({
        status: res.statusCode,
        success: false,
        err: err,
      });
      return
    }

    const response = { balance: updatedBalance }

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  })
};

const getUserDetails = (req, res, client) => {
  const userID = req.params.userID;

  if (!userID) {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please Input User ID",
      data: req.body,
    });
    return
  }

  client.query(getQuery, [userID], (err, result) => {
    if (err && !result) {
      res.status(res.statusCode).send({
        status: res.statusCode,
        success: false,
        error: err,
      });
      return
    }

    const response = { user: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = { 
  updateBalance,
  getUserDetails,
};

