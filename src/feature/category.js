const query = 'SELECT * FROM category';

const category = (req, res, client) => {
  client.query(query, (err, result) => {
    if (err) {
      res.status(400).send({
        status: res.statusCode,
        success: false,
        error: err
      });
    }

    const response = { category: result.rows };

    res.status(res.statusCode).send({
      status: res.statusCode,
      success: true,
      data: response
    });
  });
};

module.exports = category;
