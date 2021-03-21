const query = 'SELECT pd.description FROM plan_desc pd where pd.plan_id = $1';

const plan = (req, res, client) => {
  client.query(query, [req.params.product], (err, result) => {
    if (err) {
      res.status(400).send(err);
    }

    const response = { plan: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = plan;
