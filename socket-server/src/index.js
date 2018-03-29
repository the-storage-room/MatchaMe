import http from 'http';
import SocketIo from 'socket.io';

import clientEvents from './socketEvents/clientEvents';

const server = http.createServer();
const io = SocketIo(server);

io.on('connection', (client) => {
  console.log('client connected');
  const { matchId } = client.handshake.query;
  const room = matchId;
  
  client.join(room);

  for (let event in clientEvents) {
      client.on(event, clientEvents[event].bind(null, { io, client, room }));
    }
  });


const { PORT } = process.env;
server.listen(PORT, () => console.log(`Socket server listening on port ${PORT}`));