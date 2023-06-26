import { updateLocalStorage } from './helpers';

export default {
    addItem: (state, payload) => {
      state.items.push(payload);
      console.log('Log after add', state.items + ' ' + payload);
      updateLocalStorage(state.items);
    },
    updateItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items[index].completed = payload.completed;
      state.items[index].title = payload.title;
      updateLocalStorage(state.items);
    },
    deleteItem: (state, payload) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index > -1) state.items.splice(index, 1);
      updateLocalStorage(state.items);
    },
    deleteAllItem: (state) => {
      state.items = [];
      updateLocalStorage(state.items);
    }
  };