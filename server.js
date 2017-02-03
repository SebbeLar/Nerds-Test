const express = require('express');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/', function(req, res) {
  request('http://echo.jsontest.com/nerds/sweden', function(err, response, body) {
    if(!err && response.statusCode === 200) {
      const json = JSON.parse(body);
      res.render('index', {json: json});
    }
  });
});

app.listen(8080, function() {
  console.log('Server is listening on port 8080');
});
