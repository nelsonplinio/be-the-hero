const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const http = require('http');

const routes = require('./routes');

const connectedUsers = {};

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  origins: 'http://localhost:* http://127.0.0.1:*',
});
app.use(cors());

io.on('connection', (socket) => {
  console.log('connection', socket.id);
  const { user_id } = socket.handshake.query;
  connectedUsers[user_id] = socket.id;
  io.on('disconnect', () => {
    console.log('disconnect');
    delete connectedUsers[user_id];
  });
});

app.use(express.json());
app.use((req, _, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  next();
});

app.use(routes);

app.listen(3333);
