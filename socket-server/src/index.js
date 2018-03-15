const http = require('http');
const SocketIo = require('socket.io');

// const Rooms = require('./rooms');
// const clientEvents = require('./clientEvents');

const server = http.createServer();
const io = SocketIo(server);

io.on('connection', (client) => {
  console.log('client connected');
});

const PORT = process.env.PORT || 4155;
server.listen(PORT, () => console.log(`Socket Server listening on port ${PORT}`));