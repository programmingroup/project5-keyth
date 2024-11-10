// server.mjs
import { createServer } from 'node:http';


const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Keyth! Welcome to my simple HTTP server in Node.js. This is an example of how to set up a basic web server that handles request on port 3000');
});


server.listen(3000, '0.0.0.0', () => {
  console.log('Listening on 127.0.0.1:3000');
});


