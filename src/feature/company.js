const query = `
  SELECT p.id, p.name, p.price, p.duration_type from plan p
  JOIN service s ON s.id = p.service_id
  WHERE s.id = $1
  ORDER BY p.id
`;

const service = (req, res, client) => {
  client.query(query, [req.params.company], (err, result) => {
    if (err && !result) {
      res.status(res.statusCode).send({
        status: res.statusCode,
        success: false,
        error: err,
      });
      return
    }

    const response = { service: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = service;
