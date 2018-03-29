export const serverInitialState = ({ client }, payload) => {
  client
    .emit('server.initialState', {
      chatHistory: payload,
    });
};

export const serverLeave = ({ io, room }) => {
  io
    .in(room)
    .emit('server.leave');
};

export const serverChat = ({ io, room }, message) => {
  io
    .in(room)
    .emit('server.chat', message)
};