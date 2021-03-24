const { PlanType } = require('./../map');
const postQuery = `
  INSERT INTO "order"
  (user_id, plan_id, start_date, end_date)
  VALUES($1, $2, to_timestamp($3), to_timestamp($4))
`;
const transactionQuery = `
  UPDATE "user" u SET balance = balance - $1 where u.id = $2
  RETURNING balance
`;
const getQuery = `
  SELECT p.name, p.price, o.end_date FROM "order" o
  JOIN plan p ON p.id = o.plan_id 
  WHERE o.user_id = $1;
`;

const sendError = errorMessage => {
  res.status(res.statusCode).send({
    status: res.statusCode,
    success: false,
    err: errorMessage,
    data: req.body,
  });
}

const postOrder = (req, res, client) => {
  const userID = req.body.userID;
  const planID = req.body.planID;
  const planType = req.body.planType;
  const price = req.body.price;

  const shouldAbort = err => {
    if (err) {
      console.error('Error in transaction', err.stack)
      client.query('ROLLBACK', err => {
        if (err) {
          console.error('Error rolling back client', err.stack)
        }
      })

      sendError('Error in transaction')
    }
    return !!err
  }

  if (!userID) {
    sendError("Please input User ID")
    return
  }

  if (!planID) {
    sendError("Please input Plan ID")
    return
  }

  if (!planType) {
    sendError("Please input Plan Type")
    return
  }

  if (!price) {
    sendError("Please input the Price")
    return
  }

  const currentTime = new Date();
  let startDate = currentTime.getTime();
  let endDate;

  switch (planType) {
    case PlanType.Daily:
      endDate = new Date(currentTime.setDate(currentTime.getDate() + 1)).getTime()
      break;
    case PlanType.Monthly:
      endDate = new Date(currentTime.setMonth(currentTime.getMonth() + 1)).getTime()
      break;
    case PlanType.Annual:
      endDate = new Date(currentTime.setFullYear(currentTime.getFullYear() + 1)).getTime()
    default:
      break;
  }
  
  startDate = (startDate - (startDate % 1000)) / 1000;
  endDate = (endDate - (endDate % 1000)) / 1000;

  client.query('BEGIN', err => {
    if (shouldAbort(err)) return

    // update order
    client.query(postQuery, [userID, planID, startDate, endDate], (err, result) => {
      if (err && !result) {
        shouldAbort(err) 
        return
      }
    });

    // update balance
    client.query(transactionQuery, [price, userID], (err, transactionResult) => {
      const updatedBalance = transactionResult ? transactionResult.rows[0].balance : -1;

      if ((err && !transactionResult) || updatedBalance < 0) {
        shouldAbort(err)
        return
      }
    })

    client.query('COMMIT', err => {
      if (err) {
        shouldAbort(err)
        return
      }

      res.status(res.statusCode).send({
        status: res.statusCode,
        success: true,
        data: {
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        }
      });
    })
  });
};

const getOrder = (req, res, client) => {
  const userID = req.body.userID;

  if (!userID) {
    sendError("Please input User ID")
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

    const response = { company: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = { 
  postOrder,
  getOrder,
};

