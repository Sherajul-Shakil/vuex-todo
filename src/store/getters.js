export default {
    items: (state) => {
      return state.items;
    },
    totalItems: (state) => {
      return state.items.length;
    },
    completedItems: (state) => {
      return state.items.filter((item) => item.completed);
    },
    totalCompletedItems: (state, getters) => {
      return getters.completedItems.length;
    }
  };
  