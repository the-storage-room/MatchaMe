import http from 'http';
import SocketIo from 'socket.io';

import clientEvents from './socketEvents/clientEvents';

const server = http.createServer();
const io = SocketIo(server);

io.on('connection', (client) => {
  console.log('client connected');
  const { user1id, user2id } = client.handshake.query;
  const room = [user1id, user2id].sort();
  client.join(room);

  clientEvents.forEach((handler, event) => {
    client.on(event, handler.bind(null, { io, client, room }));
  });
});

const { PORT } = process.env;
server.listen(PORT, () => console.log(`Socket server listening on port ${PORT}`));