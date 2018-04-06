import db from '../mongodb/ChatsModel'
import {
  serverInitialState,
  serverLeave,
  serverChat,
} from './serverEvents';

const clientReady = async ({ client, room }) => {
  try {
    const data = await db.fetchChats(room)
    if (data.length) {
      serverInitialState({ client, room }, data);
    } else {
       db.addChatroom(room);
    }
  } catch(err) {
    console.error
  }
};

const clientDisconnect = ({ io, room }) => {
  serverLeave({ io, room });
};  

const clientChat = ({ io, room }, payload) => {
  db.addChatMessage(payload, room)
  serverChat({ io, room }, payload);
};


const clientEmitters = {
  'client.ready': clientReady,
  'client.disconnect': clientDisconnect,
  'client.chat': clientChat,
};

export default clientEmitters;
