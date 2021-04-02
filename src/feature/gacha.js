const postQuery = `
  UPDATE "user" u SET gacha = false where u.id = $1
  RETURNING gacha
`;
const getDeals = `
  SELECT d.deal_id, d.name, d.start_date, d.end_date, d.plan_id FROM deal d 
  WHERE NOW() >= d.start_date 
  AND NOW() <= d.end_date
`

const gacha = (req, res, client) => {
  const userID = req.params.userID;

  if (!userID) {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please input User ID",
      data: req.body,
    });
    return
  }

  // update gacha
  client.query(postQuery, [userID], (err, transactionResult) => {
    const gacha = transactionResult || false;

    if (err) {
      res.status(res.statusCode).send({
        status: res.statusCode,
        success: false,
        err: err,
      });
      return
    }

    const response = { gacha: gacha }

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  })
};

module.exports = { 
  gacha,
};