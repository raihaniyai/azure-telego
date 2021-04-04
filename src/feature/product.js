const query = `
  SELECT p.id, p.name, p.price, p.duration_type, pd.description FROM plan p 
  JOIN plan_desc pd ON pd.plan_id = p.id 
  WHERE pd.plan_id = $1
`;

const plan = (req, res, client) => {
  client.query(query, [req.params.product], (err, result) => {
    if (err) {
      res.status(400).send(err);
    }

    const plan = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      price: result.rows[0].price,
      durationType: result.rows[0].duration_type,
      description: [],
    };

    for (const id in result.rows) {
      plan.description.push(result.rows[id].description);
    }

    const response = { plan: plan };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = plan;
