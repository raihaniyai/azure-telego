const https = require('https')

const getNews = (req, res) => {
  const searchQueryParams = req.params.searchQueryParams || '';
  let value;

  const options = {
    hostname: 'api.bing.microsoft.com',
    path: `/v7.0/news/search?q=5g+${searchQueryParams}&count=30`,
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.APIKEY,
    }
  }

  callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });
  
    response.on('end', function () {
      value = JSON.parse(str);

      res.status(res.statusCode).send({
        status: res.statusCode,
        success: true,
        data: value.value
      });
    });
  }
  
  var request = https.request(options, callback);
  request.end();
}

module.exports = {
  getNews
};
