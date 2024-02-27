// Import Socket.IO client library
import io from 'socket.io-client';
import { event } from './event';

// Define the URL of your backend server
const serverURL = 'http://192.168.0.124:3000';

// Connect to the Socket.IO server
const socket = io(serverURL);

export const sendMessage = (message) => {
  socket.emit('message', message);
};

// Listen for 'message' event from the server
event.on('SEND_MESSAGE', (message) => {
  sendMessage(message);
});

export const joinRoom = (username) => {
  socket.emit('joinRoom', username);
  console.log('joined the room');
  socket.on('message', (payload) => {
    console.log('Received message from server:', payload);
    // eslint-disable-next-line no-unused-expressions
    event.emit('MESSAGE_RECEIVED', payload);
  });
  return { sendMessage };
};
