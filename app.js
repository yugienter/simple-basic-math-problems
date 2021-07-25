const express = require("express");
const http = require('http');

const app = express();
const server = http.createServer(app);
app.use(express.json());
require("./routes/")(app);

server.listen(3000);
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('*** Listening on ' + bind);
}

module.exports = server;