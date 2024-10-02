const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const requestListener = (req, res) => {
  res.writeHead(200);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
