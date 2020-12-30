https://github.com/Shreekanth-25/aws-elastic-beanstalk-express-js-sample.git
git add app.js
git commit -m "change message"
git push
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('P Y Shreekanth'));
app.get('/', (req, res) => res.send('7899151988'));
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
}).listen(8080);


app.listen(port);
console.log(`App running on http://localhost:${port}`);
