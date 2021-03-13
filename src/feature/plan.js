const query = 'SELECT * FROM plan';

const plan = (req, res, client) => {
  client.query(query, function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    const response = { plan: result.rows }

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = plan;
