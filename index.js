const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
      res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
          res.write('COMMON_VARIABLE: '+ process.env.COMMON_VARIABLE);
          res.write('\nNODE_ENV: '+ process.env.NODE_ENV);
          res.end('\nHello PM2\n');
});

server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});