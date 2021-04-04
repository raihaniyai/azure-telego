const getQuery = `
  SELECT s.name service_name, d.name deal_name, d.img, d.start_date, d.end_date, d.promo_code FROM user_deal ud
  JOIN deal d ON ud.deal_id = d.deal_id 
  JOIN plan p ON p.id = d.plan_id
  JOIN service s ON s.id = p.service_id
  WHERE ud.user_id = $1;
`;

const getCouponPlanQuery = `
  SELECT d.name deal_name, d.img, d.start_date, d.end_date, d.promo_code, d.discount_price FROM user_deal ud
  JOIN deal d ON ud.deal_id = d.deal_id
  WHERE ud.user_id = $1
  AND d.plan_id = $2;
`;

const sendError = (req, res, errorMessage) => {
  res.status(res.statusCode).send({
    status: res.statusCode,
    success: false,
    err: errorMessage,
    data: req.body,
  });
}

const getMyCoupon = (req, res, client) => {
  const userID = req.params.userID;

  if (!userID) {
    sendError(req, res, "Please input User ID")
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

    const response = { coupons: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

const getCouponPlan = (req, res, client) => {
  const userID = req.params.userID;
  const planID = req.params.planID;

  if (!userID) {
    sendError(req, res, "Please input User ID")
    return
  }

  if (!planID) {
    sendError(req, res, "Please input Plan ID")
    return
  }

  client.query(getCouponPlanQuery, [userID, planID], (err, result) => {
    if (err && !result) {
      res.status(res.statusCode).send({
        status: res.statusCode,
        success: false,
        error: err,
      });
      return
    }

    const response = { coupons: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = {
  getMyCoupon,
  getCouponPlan,
};

