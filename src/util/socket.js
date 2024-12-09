// src/socket.ts
import { reactive } from 'vue';
import { io } from 'socket.io-client';

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

const URL = import.meta.env.VITE_SOCKET_URL; // WebSocket URL
// const socket = io(URL);
export const socket = io(URL, {
  path: '/ws',
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('connect');
  state.connected = true;
});

socket.on('disconnect', () => {
  console.log('disconnect');
  state.connected = false;
});

