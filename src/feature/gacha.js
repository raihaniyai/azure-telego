const postQuery = `
  UPDATE "user" u SET gacha = false where u.id = $1
  RETURNING gacha
`;
const getDealsQuery = `
  SELECT d.deal_id, d.name, d.start_date, d.end_date, d.plan_id, d.img FROM deal d 
  WHERE NOW() >= d.start_date 
  AND NOW() <= d.end_date
`;
const insertQuery = `
  INSERT INTO user_deal
  (user_id, deal_id)
  VALUES($1, $2);
`;

const sendError = (req, res, errorMessage) => {
  res.status(res.statusCode).send({
    status: res.statusCode,
    success: false,
    err: errorMessage,
    data: req.body,
  });
}

const gacha = (req, res, client) => {
  const userID = req.params.userID;
  let gacha;
  let deals;

  const shouldAbort = err => {
    if (err) {
      console.error('Error in transaction', err.stack)
      client.query('ROLLBACK', err => {
        if (err) {
          console.error('Error rolling back client', err.stack)
        }
      })

      sendError(req, res, 'Error in transaction')
    }
    return !!err
  }

  if (!userID) {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please input User ID",
      data: req.body,
    });
    return
  }

  client.query('BEGIN', err => {
    if (shouldAbort(err)) return

    // update order
    client.query(postQuery, [userID], (err, result) => {
      gacha = result ? result.rows[0].balance : false;

      if (err && !result) {
        shouldAbort(err) 
        return
      }
    });

    // get_deals
    client.query(getDealsQuery, (err, dealsResult) => {
      if (err && !dealsResult) {
        shouldAbort(err)
        return
      }

      deals = dealsResult.rows;
    });


    client.query('COMMIT', err => {
      if (err) {
        shouldAbort(err)
        return
      }

      const randomDeals = deals[Math.floor(Math.random() * deals.length)];
  
      client.query(insertQuery, [userID, randomDeals.deal_id], (err, result) => {
        if (err && !result) {
          shouldAbort(err)
          return
        }
      })

      const response = { gachaResult: randomDeals }

      res.status(res.statusCode).send({
        status: res.statusCode,
        success: true,
        data: response
      });
    })
  });
};

module.exports = { 
  gacha,
};