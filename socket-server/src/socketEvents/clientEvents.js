import {
  serverInitialState,
  serverLeave,
  serverChat,
} from './serverEvents';

const clientReady = async ({ client, room }) => {
  console.log('client ready heard');
  try {
    const chatHistory = [{user: 'test-user', message: 'test-message'}]
    serverInitialState({ client, room }, chatHistory);
  } catch(err) {
    console.error
  }
};

const clientDisconnect = ({ io, room }) => {
  console.log('client disconnected');
  serverLeave({ io, room });
};

const clientChat = ({ io, room }, payload) => {
  console.log('client message received');
  serverChat({ io, room }, payload);
};


const clientEmitters = {
  'client.ready': clientReady,
  'client.disconnect': clientDisconnect,
  'client.chat': clientChat,
};

export default clientEmitters;
