const { PlanType } = require('./../map');
const postQuery = `
  INSERT INTO "order"
  (user_id, plan_id, start_date, end_date)
  VALUES($1, $2, to_timestamp($3), to_timestamp($4))
`;
const getQuery = `
  SELECT p.name, p.price, o.end_date FROM "order" o
  JOIN plan p ON p.id = o.plan_id 
  WHERE o.user_id = $1;
`;

const postOrder = (req, res, client) => {
  const userID = req.body.userID;
  const planID = req.body.planID;
  const planType = req.body.planType;

  if (userID && planID && planType) {
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

    client.query(postQuery, [userID, planID, startDate, endDate], (err, result) => {
      if (err && !result) {
        res.status(res.statusCode).send({
          status: res.statusCode,
          success: false,
          error: err,
        });
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
    });
  } else {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please input user ID, plan ID and plan type",
      data: req.body,
    });
  }
};

const getOrder = (req, res, client) => {
  const userID = req.body.userID;

  if (userID) {
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
  } else {
    res.status(res.statusCode).send({
      status: res.statusCode,
      success: false,
      err: "Please input user ID",
      data: req.body,
    });
  }
};

module.exports = { 
  postOrder,
  getOrder,
};

